import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import '../styles/CommentingSection.css';

/**
 * CommentingSection component represents a section for commenting.
 * It allows users to submit comments, fetch existing comments, and display them.
 */
const CommentingSection = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    // I think I have the issue fetching the contents of my db because it is not connecting to the right route
    useEffect(() => {
        fetch('http://localhost:5173/red-cockaded-woodpecker')
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => {
                console.error('Fetch error:', error);
                // This error appears on the screen when the fetch fails
                setError('An error occurred while fetching comments');
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = { name, comment };

        fetch('http://localhost:5173/red-cockaded-woodpecker', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment),
        })
        .then(response => {
            if (!response.ok) {
                // This error is thrown in the console because the fetch fails when trying to post a comment
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // The comment is trying to be sent to the database, but since it's not connected, it doesn't appear in the database
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