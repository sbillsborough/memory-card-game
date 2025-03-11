import { useEffect, useState } from "react";
import "./Cards.css";

function Cards({ handleClick }) {
  const [images, setImages] = useState([]);

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
