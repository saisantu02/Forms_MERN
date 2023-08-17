import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState(null);
  const [createForm, setCreateForm] = useState({
    name: "",
    age: "",
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/view");
    setUsers(res.data.users);
  };

  const updateCreateForm = (e) => {
    const { name, value } = e.target;
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createUser = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/add", createForm);
    setUsers([...users, res.data.user]);
    setCreateForm({ name: "", age: "" });
  };
  return (
    <div className="App">
      <div>
        <table
          style={{
            borderCollapse: "collapse",
            border: "5px solid white",
            borderRadius: "10px",
            margin: "auto",
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                Age
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}>
                  <td
                    style={{
                      border: "5px solid white",
                      borderRadius: "10px",
                      padding: "8px",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {user.name}
                  </td>
                  <td
                    style={{
                      border: "5px solid white",
                      borderRadius: "10px",
                      padding: "8px",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {user.age}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div>
        <form
          onSubmit={createUser}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          <label style={{ marginBottom: "8px", fontSize: "24px" }}>
            Enter Name<br></br>
            <input
              onChange={updateCreateForm}
              value={createForm.name}
              name="name"
              placeholder="John Doe"
              required
            />
          </label>
          <label style={{ marginBottom: "8px", fontSize: "24px" }}>
            Enter Age<br></br>
            <input
              onChange={updateCreateForm}
              value={createForm.age}
              name="18"
              placeholder="Your age"
              required
            />
          </label>
          <button className="submitButton" type="submit">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
