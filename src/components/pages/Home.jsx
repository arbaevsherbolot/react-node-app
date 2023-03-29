import React, { useState } from "react";
import axios from "axios";
import "./Style.scss";
import icon from "../../assets/bxs-send.svg";

export const Home = () => {
  const [name, setName] = useState("");

  async function sendData(e) {
    if (input.value == " " || input.value === "") {
      alert("The field must not be empty");
    } else {
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
        <button type="submit">
          <img src={icon} />
        </button>
      </form>
    </div>
  );
};
