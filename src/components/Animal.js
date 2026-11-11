import { useState } from "react";

function Animal({ animal, onToggleLike }) {
  const [imageOk, setImageOk] = useState(true);

  const emoji =
    animal.espece === "Chat" ? "🐱" : animal.espece === "Chien" ? "🐶" : "🐾";

  return (
    <div className="card h-100 border-0 shadow-sm animal-card">
      {/* Image avec bouton like superposé */}
      <div className="position-relative">
        {imageOk ? (
          <img
            src={animal.image}
            alt={animal.nom}
            className="card-img-top animal-img"
            onError={() => setImageOk(false)}
          />
        ) : (
          <div className="animal-img d-flex align-items-center justify-content-center bg-light fs-1">
            {emoji}
          </div>
        )}

        <button
          type="button"
          className="btn btn-light rounded-circle shadow-sm position-absolute top-0 end-0 m-2 like-btn"
          onClick={() => onToggleLike(animal.nom)}
          aria-label={animal.liked ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <span className={animal.liked ? "text-danger" : "text-secondary"}>
            {animal.liked ? "♥" : "♡"}
          </span>
        </button>

        <span className="badge bg-primary position-absolute bottom-0 start-0 m-2">
          {animal.espece}
        </span>
      </div>

      {/* Contenu */}
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">{animal.nom}</h5>
          <span className="badge rounded-pill bg-light text-dark border">
            {animal.age} {Number(animal.age) > 1 ? "ans" : "an"}
          </span>
        </div>

        <p className="card-text text-muted flex-grow-1">{animal.descr}</p>

        <button
          type="button"
          className={
            animal.liked
              ? "btn btn-danger w-100"
              : "btn btn-outline-danger w-100"
          }
          onClick={() => onToggleLike(animal.nom)}
        >
          {animal.liked ? "♥ Dans mes favoris" : "♡ Ajouter aux favoris"}
        </button>
      </div>
    </div>
  );
}

export default Animal;