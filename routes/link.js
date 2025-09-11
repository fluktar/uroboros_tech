const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/email");
const mapKey = require("../utils/maps");
router.get("/", (req, res, next) => {
  res.render("index", { mapKey });
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
