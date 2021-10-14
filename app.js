const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/challenge3", (req, res) => {
  res.render("challenge-3", {
    title: "challenge 3",
  });
});

app.get("/challenge4", (req, res) => {
  res.render("challenge-4", {
    title: "challenge 4",
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404<h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
