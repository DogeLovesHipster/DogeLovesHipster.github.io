import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import '../styles/CommentingSection.css';

const CommentingSection = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('/api/comments')
            .then(response => setComments(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = { name, comment };

        axios.post('/api/comments', newComment)
            .then(response => {
                setComments(prevComments => [...prevComments, response.data]);
                setName('');
                setComment('');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="comment-section">
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