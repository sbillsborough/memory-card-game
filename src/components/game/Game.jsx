import { useState } from "react";
import { Cards } from "./Cards";
import { ScoreBoard } from "./Scoreboard";

function Game() {
  const [imageId, setImageId] = useState([]);

  return (
    <div>
      <ScoreBoard currentScore={imageId.length} />
      <Cards imageId={imageId} setImageId={setImageId} />
    </div>
  );
}

export { Game };
