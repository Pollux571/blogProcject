const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const blogum = (blog = {
    id: 1,
    title: "Blog title",
    description: "Blog description",
  });
  res.send(blogum);
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`projemi su ${port} portunda olusturdum`);
});
