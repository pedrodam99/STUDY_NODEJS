const express = require("express");
const exhbs = require("express-handlebars");
const conn = require("./db/conn");

const User = require("./models/User");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exhbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/users/create", (req, res) => {
  res.render("addUser");
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newletter = req.body.newsletter;

  newletter === "on" ? (newletter = true) : (newletter = false);

  await User.create({ name, occupation, newletter });
  res.redirect("/");
});

conn
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
