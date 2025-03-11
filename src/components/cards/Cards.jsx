import { useEffect, useState } from "react";
import "./Cards.css";

function Cards({ handleClick, images }) {
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
