import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../../redux/actions';
import './AddScorePopup.css';
import { AiOutlineClose } from 'react-icons/ai';

const AddScorePopup = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const formatScore = (value) => {
        const parts = value.split(/[:.]/);
        const minutes = parseInt(parts[0], 10) * 60;
        const seconds = parseInt(parts[1], 10);
        const milliseconds = parseInt(parts[2], 10) / 1000;
        return minutes + seconds + milliseconds;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const scoreValue = formatScore(value);
        dispatch(addScore({ username, value: scoreValue }));
        setUsername('');
        setValue('');
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <button className="close-btn" onClick={onClose}><AiOutlineClose /></button>
                <h2 className="popup-title">Add New Score</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Username"
                        required
                    />
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="MM:SS.MSS (e.g., 01:23.456)"
                        pattern="^\d{2}:\d{2}\.\d{3}$"
                        title="Format: MM:SS.MSS"
                        required
                    />
                    <button type="submit">Add Score</button>
                </form>
            </div>
        </div>
    );
};

export default AddScorePopup;
