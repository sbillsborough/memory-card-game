function ScoreBoard({ currentScore, bestStreak }) {
  return (
    <>
      <h2>Score Board</h2>

      <h3>Best Streak: {bestStreak}</h3>
      <h3>Current Score: {currentScore}</h3>
    </>
  );
}

export { ScoreBoard };
