const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("Hello My MiddleWare");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", middleware(), (req, res) => {
  res.send("Hello About World");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact World");
});

app.get("/signin", (req, res) => {
  res.send("Hello Signin World");
});

app.get("/signup", (req, res) => {
  res.send("Hello Signup World");
});

app.listen(8000, () => {
  console.log("Server Running On Port 8000");
});
