import React, { useEffect, useState } from "react";
import "./Style.scss";

export const Result = () => {
  const [users, setUsers] = useState([]);

  const port = 2006;
  const path = "result";

  useEffect(() => {
    fetch(`http://localhost:${port}/${path}`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3 className="title">All names:</h3>

      {users.map((user, id) => (
        <div key={id}>
          <p className="names">{user.names}</p>
        </div>
      ))}
    </div>
  );
};
