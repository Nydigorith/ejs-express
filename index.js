const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/public/home.html");
  res.render("home", { title: "home" });
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.get("/update/:id", (req, res) => {
  res.render("update", { blogId: req.params.id });
});
app.get("/blog", (req, res) => {
  res.render("blog", {
    blog: [
      {
        title: "Yoshi finds eggs",
        description: "Lorem ipsum dolor sit amet consectetur",
      },
      {
        title: "Mario finds stars",
        description: "Lorem ipsum dolor sit amet consectetur",
      },
      {
        title: "How to defeat bowser",
        description: "Lorem ipsum dolor sit amet consectetur",
      },
    ],
  });
});

app.post("/create", (req, res) => {
  console.log(req.body);
});
app.post("/update/:id", (req, res) => {
  console.log("update" + req.params.id);
  console.log("Blog Id" + req.params.id);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
