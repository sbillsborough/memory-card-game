import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { ScoreBoard } from "./ScoreBoard";

function Game() {
  const [imageId, setImageId] = useState([]); // Track clicked images
  const [bestStreak, setBestStreak] = useState(0); // Track highest score
  const [images, setImages] = useState([]); // Store images for shuffling

  // Fetch images in Game.jsx so we can shuffle them
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://api.pexels.com/v1/search?query=nature&per_page=10",
          {
            headers: {
              Authorization: import.meta.env.VITE_PEXELS_API_KEY,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch images");

        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const handleClick = (id) => {
    if (imageId.includes(id)) {
      setImageId([]); // Reset score on duplicate click
    } else {
      const newImageId = [...imageId, id];
      setImageId(newImageId);

      // Update best streak if a new high score is reached
      if (newImageId.length > bestStreak) {
        setBestStreak(newImageId.length);
      }
    }

    // Shuffle images after every click
    setImages((prevImages) => [...prevImages].sort(() => Math.random() - 0.5));
  };

  return (
    <div>
      <ScoreBoard currentScore={imageId.length} bestStreak={bestStreak} />
      <Cards handleClick={handleClick} images={images} />
    </div>
  );
}

export { Game };
