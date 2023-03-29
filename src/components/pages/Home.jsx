import React, { useState } from "react";
import axios from "axios";
import "./Style.scss";

export const Home = () => {
  const [name, setName] = useState("");

  async function sendData(e) {
    e.preventDefault();
    input.value = "";

    try {
      await axios.post("http://localhost:2006/sendData", {
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
          id="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        <button type="submit">Send to backend</button>
      </form>
    </div>
  );
};
