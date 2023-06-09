import React, { useState } from "react";
import axios from "axios";
import "./Style.scss";
import icon from "../../assets/bxs-send.svg";

export const Home = () => {
  const [name, setName] = useState("");

  async function sendData(e) {
    if (input.value === " " || input.value === "") {
      e.preventDefault();
      err.innerText = "This field should not be empty";
    } else {
      e.preventDefault();
      input.value = "";
      err.innerText = "";

      alert("Sending a name to the backend (server)");
      alert("The name is added after confirmation!");
      try {
        window.location.href = "https://sher-app.netlify.app/result";
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

      <span id="err"></span>
    </div>
  );
};
