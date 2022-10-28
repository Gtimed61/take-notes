const router = require("express").Router();
const path = require('path');
const fs = require('fs');
const db = require('../../db/db.json');

router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", (req, res) => {
  let newNote = req.body;
  let noteId = (db.length +1).toString();
  newNote.id = noteId;
  db.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(db));
  res.json(db);
});

module.exports = router;