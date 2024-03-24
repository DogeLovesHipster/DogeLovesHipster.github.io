import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import '../styles/CommentingSection.css';

const CommentingSection = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5173/comments')
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => {
                console.error('Fetch error:', error);
                setError('An error occurred while fetching comments');
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = { name, comment };

        fetch('http://localhost:5173/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Comment sent to the database:', data);
            setComments(prevComments => [...prevComments, data]);
            setName('');
            setComment('');
        })
        .catch(error => {
            console.error(error);
            setError('An error occurred while creating the comment');
        });
    };

    return (
        <div className="comment-section">
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <div className="comment-box">
                    <label>
                        Comment
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
                    </label>
                    <div className="button-container">
                        <button type="submit" className="submit-button-left">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </form>
            <div className="comments">
                {Array.isArray(comments) && comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <h2>{comment.name}</h2>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentingSection;
