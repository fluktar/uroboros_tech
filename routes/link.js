const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/email");
const mapKey = require("../utils/maps");
router.get("/", (req, res, next) => {
  res.render("index", { mapKey });
});

router.get("/zt", (req, res) => {
  res.render("zt", { mapKey });
});
router.get("/za", (req, res) => {
  res.render("za", { mapKey });
});
router.get("/up", (req, res) => {
  res.render("up", { mapKey });
});
router.get("/op", (req, res) => {
  res.render("op", { mapKey });
});
router.get("/rzk", (req, res) => {
  res.render("rzk", { mapKey });
});
router.get("/security", (req, res) => {
  res.render("security", { mapKey });
});
router.get("/cid", (req, res) => {
  res.render("cid", { mapKey });
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
