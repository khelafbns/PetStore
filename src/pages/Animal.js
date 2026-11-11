import Animal from "../components/Animal";

export function AnimalsList({ animals, onToggleLike }) {
  return (
    <div className="d-flex flex-wrap gap-3">
      {animals.map((a) => (
        <Animal key={a.nom} animal={a} onToggleLike={onToggleLike} />
      ))}
    </div>
  );
}

function Animals({ animals, onToggleLike }) {
  return (
    <div>
      <h2>Nos animaux</h2>
      <AnimalsList animals={animals} onToggleLike={onToggleLike} />
    </div>
  );
}

export default Animals;