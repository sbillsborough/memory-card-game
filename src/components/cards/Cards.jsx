import { useEffect, useState } from "react";
import "./Cards.css";

function Cards() {
  const [images, setImages] = useState([]);
  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  // Function to handle image click
  const handleClick = (id) => {
    console.log("image clicked:", id);

    if (imageId.includes(id)) {
      console.log("Already clicked! Ressetting...");
      setImageId([]); // Reset if the same image is clicked again
    } else {
      setImageId([...imageId, id]); // Stores the clicked image ID
    }

    // Shuffle images after click
    setImages((prevImages) => [...prevImages].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://api.pexels.com/v1/search?query=nature&per_page=10",
          {
            headers: {
              Authorization: API_KEY,
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
  }, [API_KEY]);

  return (
    <div>
      <h3>Cards</h3>
      <div className="grid">
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="card-container-div">
              <img
                src={image.src.medium}
                alt={image.photographer}
                className="cards"
                onClick={() => handleClick(image.id)}
              />
            </div>
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </div>
  );
}

export { Cards };
