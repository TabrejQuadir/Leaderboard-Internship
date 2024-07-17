import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './Leaderboard.css';
import { FaMedal } from 'react-icons/fa';
import { CiStopwatch } from "react-icons/ci";

const Leaderboard = () => {
    const scores = useSelector((state) => state.scores);
    const leaderboardRef = useRef(null);

    // Sort the scores in ascending order (lower times are better)
    const sortedScores = [...scores].sort((a, b) => a.value - b.value);

    useEffect(() => {
        if (leaderboardRef.current) {
            leaderboardRef.current.scrollTop = leaderboardRef.current.scrollHeight;
        }
    }, [scores]);

    return (
        <div className="leaderboard">
            <h2 className="leaderboard-title">FASTEST OF TODAY</h2>
            <hr className="goldenrod-left-1" />
            <hr className="goldenrod-left-2" />
            <hr className="goldenrod-left-3" />
            <hr className="aqua-right-1" />
            <hr className="aqua-right-2" />
            <hr className="aqua-right-3" />
            <div className="leaderboard-list-header">
                <span className="header-item">RANK</span>
                <span className="header-item">NAME</span>
                <span className="header-item">TIME</span>
            </div>
            <div className="leaderboard-list" ref={leaderboardRef}>
                {sortedScores.slice(0, 10).map((score, index) => (
                    <div
                        key={index}
                        className={`score-entry rank-${index + 1}`}
                    >
                        <div className="rank">
                            <FaMedal className={`medal medal-${index + 1}`} />
                            <span>{index + 1}</span>
                        </div>
                        <div className="details">
                            <span className="username">{score.username}</span>
                            <span className="score">{score.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
