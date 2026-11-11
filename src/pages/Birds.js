import { useState } from "react";

const oiseaux = [
  { id: 1, nom: "Perruche ondulée", origine: "Australie", prix: 3500, esperance: "5 à 8 ans", emoji: "🦜", descr: "Petite perruche colorée, sociable et facile à apprivoiser. Idéale pour débuter." },
  { id: 2, nom: "Canari chanteur", origine: "Îles Canaries", prix: 6000, esperance: "10 à 15 ans", emoji: "🐤", descr: "Réputé pour son chant mélodieux. Demande peu d'entretien et beaucoup de lumière." },
  { id: 3, nom: "Perroquet gris du Gabon", origine: "Afrique centrale", prix: 150000, esperance: "40 à 60 ans", emoji: "🦜", descr: "L'un des oiseaux les plus intelligents. Capable d'imiter la voix humaine." },
  { id: 4, nom: "Inséparable", origine: "Afrique", prix: 8000, esperance: "10 à 15 ans", emoji: "🐦", descr: "Petit perroquet très affectueux, qui vit de préférence en couple." },
  { id: 5, nom: "Diamant mandarin", origine: "Australie", prix: 2500, esperance: "5 à 7 ans", emoji: "🐦", descr: "Oiseau joyeux et actif, très bien adapté à la vie en volière." },
  { id: 6, nom: "Cockatiel (calopsitte)", origine: "Australie", prix: 12000, esperance: "15 à 20 ans", emoji: "🦜", descr: "Doux et câlin, reconnaissable à sa huppe expressive. Siffle facilement des airs." },
];

function Birds() {
  const [recherche, setRecherche] = useState("");

  const resultats = oiseaux.filter((o) =>
    o.nom.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-1">Nos oiseaux</h2>
      <p className="text-muted">
        Des oiseaux en bonne santé, élevés en captivité et accompagnés de conseils d'entretien.
      </p>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Rechercher un oiseau..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <div className="row g-4">
        {resultats.map((o) => (
          <div className="col-12 col-md-6 col-lg-4" key={o.id}>
            <div className="card h-100 shadow-sm">
              <div className="bg-light text-center py-4 fs-1">{o.emoji}</div>
              <div className="card-body">
                <h5 className="card-title">{o.nom}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{o.origine}</h6>
                <p className="card-text">{o.descr}</p>
                <span className="badge bg-secondary">Durée de vie : {o.esperance}</span>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <strong>{o.prix.toLocaleString("fr-FR")} DA</strong>
                <button className="btn btn-sm btn-primary">Commander</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {resultats.length === 0 && (
        <p className="text-center text-muted mt-4">Aucun oiseau ne correspond à votre recherche.</p>
      )}
    </div>
  );
}

export default Birds;