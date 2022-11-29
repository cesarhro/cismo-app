const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Dicas");
});

module.exports = router;
