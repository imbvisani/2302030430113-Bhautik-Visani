import React from 'react';
import axios from 'axios';

const DeleteNote = ({ noteId }) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/notes/${noteId}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteNote;
