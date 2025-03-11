import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { ScoreBoard } from "./ScoreBoard";

function Game() {
  const [imageId, setImageId] = useState([]); // Tracks clicked images
  const [bestStreak, setBestStreak] = useState(0); // Tracks highest score
  const [images, setImages] = useState([]); // Store images for shuffling

  useEffect(() => {
    console.log("PEXELS API KEY:", import.meta.env.VITE_PEXELS_API_KEY); // Debugging

    const fetchImages = async () => {
      try {
        const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
        if (!API_KEY) throw new Error("Missing API Key");

        const response = await fetch(
          "https://api.pexels.com/v1/search?query=nature&per_page=10",
          {
            headers: { Authorization: API_KEY },
          }
        );

        if (!response.ok)
          throw new Error(`HTTP Error! Status: ${response.status}`);

        const data = await response.json();

        if (!data.photos || data.photos.length === 0) {
          throw new Error("No images received from API.");
        }

        setImages(data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
        alert("Failed to load images. Check API key or network connection.");
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
