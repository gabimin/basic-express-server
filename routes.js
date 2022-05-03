const express = require('express');
const router = express.Router();



//adding main route: /
router.get("/", (req, res) => {
  //res.end("Hello World!");
  res.render("index.ejs");
});

//adding a new route: login
router.get("/login", (req, res) => {
  //res.end("Here is login");
  res.render("login");
});



module.exports = router;