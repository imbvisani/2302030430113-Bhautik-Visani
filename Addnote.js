import React, { useState } from 'react';
import axios from 'axios';

const AddNote = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newNote = { title, content };

        axios.post('http://localhost:5000/api/notes', newNote)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h2>Add New Note</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required /><br />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
};

export default AddNote;
