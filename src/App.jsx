import { useEffect, useState } from "react";
import "./App.css"; // Assuming you create an external CSS file for styling.

export default function App() {
  const [users, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className="container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  {user.company.name}, {user.company.catchPhrase},{" "}
                  {user.company.bs}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
