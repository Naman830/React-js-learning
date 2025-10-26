import { useState, useEffect, use } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map((u) => [
        <li key={u.id}>{u.id} - {u.name}</li>
      ])}
    </div>
  );
};

export default Users;
