import { useState } from "react";

const produits = [
  { id: 1, nom: "Croquettes Premium Chat", categorie: "Chat", poids: "2 kg", prix: 2800, description: "Riches en protéines, pour chats adultes." },
  { id: 2, nom: "Croquettes Chaton", categorie: "Chat", poids: "1,5 kg", prix: 2400, description: "Formule adaptée à la croissance." },
  { id: 3, nom: "Pâtée au saumon", categorie: "Chat", poids: "400 g", prix: 450, description: "Pâtée savoureuse, sans colorants." },
  { id: 4, nom: "Croquettes Chien Adulte", categorie: "Chien", poids: "10 kg", prix: 6500, description: "Au poulet et riz, pour toutes races." },
  { id: 5, nom: "Croquettes Chiot", categorie: "Chien", poids: "3 kg", prix: 3200, description: "Enrichies en calcium pour les os." },
  { id: 6, nom: "Os à mâcher", categorie: "Chien", poids: "x5", prix: 900, description: "Aide à l'hygiène dentaire." },
  { id: 7, nom: "Mélange de graines", categorie: "Oiseau", poids: "1 kg", prix: 700, description: "Millet, alpiste et avoine pour oiseaux." },
  { id: 8, nom: "Bâtonnets aux fruits", categorie: "Oiseau", poids: "x3", prix: 600, description: "Friandise vitaminée pour perruches." },
];

const categories = ["Tous", "Chat", "Chien", "Oiseau"];

function Food() {
  const [categorie, setCategorie] = useState("Tous");

  const liste =
    categorie === "Tous"
      ? produits
      : produits.filter((p) => p.categorie === categorie);

  return (
    <div>
      <h2 className="mb-1">Nourriture pour votre animal</h2>
      <p className="text-muted">
        Une alimentation équilibrée pour garder votre compagnon en pleine forme.
      </p>

      <div className="btn-group mb-4" role="group">
        {categories.map((c) => (
          <button
            key={c}
            className={categorie === c ? "btn btn-primary" : "btn btn-outline-primary"}
            onClick={() => setCategorie(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Produit</th>
              <th>Pour</th>
              <th>Conditionnement</th>
              <th>Description</th>
              <th className="text-end">Prix</th>
            </tr>
          </thead>
          <tbody>
            {liste.map((p) => (
              <tr key={p.id}>
                <td className="fw-semibold">{p.nom}</td>
                <td><span className="badge bg-info text-dark">{p.categorie}</span></td>
                <td>{p.poids}</td>
                <td className="text-muted">{p.description}</td>
                <td className="text-end fw-bold">{p.prix.toLocaleString("fr-FR")} DA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-muted small">{liste.length} produit(s) affiché(s)</p>
    </div>
  );
}

export default Food;