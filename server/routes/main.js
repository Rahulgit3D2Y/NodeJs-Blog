const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  const locals = {
    title: "nodejs blog",
    desc: "asdwasdwasdw",
  };
  res.render("index", locals);
});

module.exports = router;

router.get("/about", (req, res) => {
  res.render("about");
});
