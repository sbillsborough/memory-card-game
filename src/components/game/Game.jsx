import { useState } from "react";
import { Cards } from "./Cards";
import { ScoreBoard } from "./Scoreboard";

function Game() {
  const [imageId, setImageId] = useState([]); // Tracks the clicked images
  const [bestStreak, setBestStreak] = useState(0); // Tracks the highest score

  const handleClick = (id) => {
    if (imageId.includes(id)) {
      setImageId([]);
    } else {
      const newImageId = [...imageId, id];
      setImageId(newImageId);

      // Update best streak if new score is higher
      if (newImageId.length > bestStreak) {
        setBestStreak(newImageId.length);
      }
    }
  };

  return (
    <div>
      <ScoreBoard currentScore={imageId.length} />
      <Cards handleClick={handleClick} />
    </div>
  );
}

export { Game };
