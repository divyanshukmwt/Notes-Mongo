const mongoose = require("mongoose");

function ConnectToDB() {
  mongoose.connect("mongodb+srv://officialdivyanshu18_db_user:Tsr1SAVOAb7jH4jr@notes.oyp2ac8.mongodb.net/NotesDB").then(() => {
    console.log("Database Connected");
  });
}

module.exports = ConnectToDB;
