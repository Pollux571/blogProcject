const express = require("express");
const mongoose = require("mongoose");

const app = express();
const ejs = require("ejs");
const Photo = require("./models/Photo");

// connect db
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const photos = await Photo.find({});
  res.render("index", {
    photos,
  });
});

app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`projemi su ${port} portunda olusturdum`);
});
