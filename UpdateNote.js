import React, { useState } from 'react';
import axios from 'axios';

const UpdateNote = ({ note }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleUpdate = () => {
        const updatedNote = { title, content };

        axios.put(`http://localhost:5000/api/notes/${note._id}`, updatedNote)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h3>Update Note</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required /><br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateNote;
