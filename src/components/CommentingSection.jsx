import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import '../styles/CommentingSection.css';

const CommentingSection = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, { name, comment }]);
        setName('');
        setComment('');
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
                {comments.map((comment, index) => (
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