import { useEffect, useState } from "react";

function Cards() {
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState([]);
  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  const handleClick = () => {
    console.log("image clicked!");
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.length > 0 ? (
          images.map((image) => (
            <div
              key={image.id}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={image.src.medium}
                alt={image.photographer}
                className="w-full h-auto"
                onClick={handleClick}
              />
              <p className="p-2 text-sm text-gray-600">{image.photographer}</p>
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
