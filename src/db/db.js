const mongoose = require("mongoose");
require("dotenv").config();

function ConnectToDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ Database Connected");
    })
    .catch((err) => {
      console.error("❌ Database connection error:", err);
    });
}

module.exports = ConnectToDB;
