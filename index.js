const express = require("express");
const mongoose = require("mongoose");
const app = express();

PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server Running on PORT: ", PORT);
});
