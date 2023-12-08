const express = require("express");
const app = express();
const PORT = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

app.get("/hello-query", (req, res) => {
  const name = req.query.name;
  res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
