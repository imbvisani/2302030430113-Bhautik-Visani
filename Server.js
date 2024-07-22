const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/notes_db'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define Schema and Model
const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model('Note', noteSchema);

// Routes
// GET all notes
app.get('/api/notes', (req, res) => {
    Note.find().then(notes => res.json(notes));
});

// POST a new note
app.post('/api/notes', (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save().then(note => res.json(note));
});

// PUT update a note
app.put('/api/notes/:id', (req, res) => {
    Note.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content
    }, { new: true }).then(note => res.json(note));
});

// DELETE a note
app.delete('/api/notes/:id', (req, res) => {
    Note.findByIdAndDelete(req.params.id).then(() => res.json({ success: true }));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
