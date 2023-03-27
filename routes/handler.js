require("dotenv").config();
const express = require("express");
const router = express.Router();
const writeEventLog = require("../WriteEventLog");

const fs = require("fs");

router.get("/result", async (req, res) => {
  const readName = process.env.NAMES;
  const str = [
    {
      names: `${readName}`,
    },
  ];

  await res.end(JSON.stringify(str));
});

router.post("/sendData", async (req, res) => {
  let { name } = req.body;
  console.log(name);
  await writeEventLog(name);
});

module.exports = router;
