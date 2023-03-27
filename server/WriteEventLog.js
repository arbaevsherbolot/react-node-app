const fs = require("fs");

const WriteEventLog = async (name) => {
  let evtLog = await fs.promises.readFile(".env", "utf-8", (err, data) => {
    if (!err) {
      console.log("Data is: ", data);
      return data;
    } else console.log("Error is:", err);
  });
  evtLog += name;

  await fs.writeFile(".env", `${evtLog} `, (err) =>
    console.log("Error is", err)
  );
};

module.exports = WriteEventLog;
