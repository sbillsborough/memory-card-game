function ScoreBoard({ curentScore, bestStreak }) {
  return (
    <>
      <h2>Score Board</h2>

      <h3>Best Streak: {bestStreak}</h3>
      <h3>Current Score: {curentScore}</h3>
    </>
  );
}

export { ScoreBoard };
