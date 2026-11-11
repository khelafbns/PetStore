import { Link } from "react-router-dom";

const avantages = [
  { icon: "🐾", titre: "Animaux sélectionnés", texte: "Chats, chiens et oiseaux élevés avec soin, vaccinés et suivis par un vétérinaire." },
  { icon: "🚚", titre: "Livraison rapide", texte: "Livraison dans toutes les wilayas sous 48 à 72 heures, en toute sécurité." },
  { icon: "🩺", titre: "Conseils d'experts", texte: "Notre équipe vous accompagne dans le choix et l'adoption de votre compagnon." },
  { icon: "💳", titre: "Paiement à la livraison", texte: "Vous payez uniquement quand vous recevez votre commande." },
];

const stats = [
  { valeur: "500+", label: "Animaux adoptés" },
  { valeur: "48", label: "Wilayas livrées" },
  { valeur: "98%", label: "Clients satisfaits" },
  { valeur: "7j/7", label: "Service client" },
];

function Home() {
  return (
    <div>
      {/* Bandeau principal */}
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="display-5 fw-bold">Bienvenue chez PetShop 🐶🐱🐦</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          Trouvez le compagnon idéal pour votre famille et tout ce dont il a besoin :
          animaux, oiseaux et alimentation de qualité, au même endroit.
        </p>
        <div className="d-flex gap-2 justify-content-center">
          <Link to="/animals" className="btn btn-primary btn-lg">Voir les animaux</Link>
          <Link to="/food" className="btn btn-outline-secondary btn-lg">Nos aliments</Link>
        </div>
      </div>

      {/* Statistiques */}
      <div className="row text-center mb-5">
        {stats.map((s) => (
          <div className="col-6 col-md-3 mb-3" key={s.label}>
            <div className="fs-2 fw-bold text-primary">{s.valeur}</div>
            <div className="text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Avantages */}
      <h2 className="text-center mb-4">Pourquoi nous choisir ?</h2>
      <div className="row g-4 mb-5">
        {avantages.map((a) => (
          <div className="col-12 col-md-6 col-lg-3" key={a.titre}>
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <div className="fs-1 mb-2">{a.icon}</div>
                <h5 className="card-title">{a.titre}</h5>
                <p className="card-text text-muted">{a.texte}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;