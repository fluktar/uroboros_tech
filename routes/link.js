const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/email");
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/zt", (req, res) => {
  res.render("zt");
});
router.get("/za", (req, res) => {
  res.render("za");
});
router.get("/up", (req, res) => {
  res.render("up");
});
router.get("/op", (req, res) => {
  res.render("op");
});
router.get("/rzk", (req, res) => {
  res.render("rzk");
});
router.get("/security", (req, res) => {
  res.render("security");
});
router.get("/cid", (req, res) => {
  res.render("cid");
});

router.post("/send-message", (req, res) => {
  const message = req.body.message;
  const email = req.body.email;
  const name = req.body.name;
  sendEmail({
    email,
    name,
    message,
  });
  res.redirect("/");
});

module.exports = router;
