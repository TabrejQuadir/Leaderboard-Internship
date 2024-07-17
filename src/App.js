import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard/Leaderboard.js';
import AddScorePopup from './components/AddScorePopup/AddScorePopup.js';
import Footer from './components/Footer/Footer.js';
import './styles.css';

const App = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="app">
            <Leaderboard />
            <button className="add-score-btn" onClick={() => setShowPopup(true)}>Add Score</button>
            {showPopup && <AddScorePopup onClose={() => setShowPopup(false)} />}
            <Footer />
        </div>
    );
};

export default App;
