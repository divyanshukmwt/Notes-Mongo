const express = require("express");
const ConnectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

const app = express();
ConnectToDB();

app.use(express.json());


app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  await noteModel.create({ title, content });

  res.json({ message: "Note Created" });
});


app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.json({ message: "Notes Fetched", notes });
});


app.delete("/notes/:id", async (req, res) => {
  const noteID = req.params.id;
  await noteModel.findByIdAndDelete(noteID);

  res.json({ message: "Note deleted Successfully" });
});


app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  await noteModel.findByIdAndUpdate(id, { title, content });

  res.json({ message: "Note updated successfully" });
});

app.listen(3000, () => {
  console.log("Server Started");
});
