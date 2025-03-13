function ScoreBoard({ currentScore, bestStreak }) {
  return (
    <div className="scoreboard-container">
      <h2>Score Board</h2>
      <h3>Best Streak: {bestStreak}</h3>
      <h3>Current Score: {currentScore}</h3>
    </div>
  );
}

export { ScoreBoard };
