const router = require("express").Router();
const path = require('path');
const fs = require('fs');
const { json } = require("express");

router.get("/notes", (req, res) => {
  let results = noteList;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

router.get("/notes", (req, res) => {
  const result = findById(req.params.id, db);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  let savedNote = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
  let newNote = req.body;
  let noteId = (savedNote.length +1).toString();
  newNote.id = noteId;
  savedNote.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(savedNote));
  res.json(savedNote);
  //req.body.id = db.length.toString();

  /*if (!(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    noteList = renderActiveNote(req.body, db);
    res.json(db);
  }*/
});

module.exports = router;