import React, { useState } from "react";
import axios from "axios";
import "./Style.scss";

export const Home = () => {
  const [name, setName] = useState("");

  const port = 2006;
  const path = "sendData";

  async function sendData(e) {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:${port}/${path}`, {
        name,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={sendData}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        <button type="submit">Send to backend</button>
      </form>
    </div>
  );
};