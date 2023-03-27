import React, { useEffect, useState } from "react";
import "./Style.scss";

export const Result = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/result")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user, id) => (
        <div key={id}>
          <h3 className="title">All names:</h3>
          <p className="names">{user.names}</p>
        </div>
      ))}
    </div>
  );
};
