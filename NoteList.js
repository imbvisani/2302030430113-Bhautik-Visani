import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/notes')
            .then(res => {
                setNotes(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map(note => (
                    <li key={note._id}>
                        <strong>{note.title}</strong>: {note.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
