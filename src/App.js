import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Animals from "./pages/Animal";
import Birds from "./pages/Birds";
import Food from "./pages/Food";

const initialAnimals = [
  { nom: "Tom", espece: "Chat", age: 2,
    descr: "Un chat hyper gentil", image: "/images/Tom.jpg", liked: false },
  { nom: "Greta", espece: "Chien", age: 5,
    descr: "Une chienne adorable pour les enfants", image: "/images/Greta.jpg", liked: false },
  { nom: "Brandon", espece: "Chien", age: 10,
    descr: "Ce bulldog est fait pour les grands amateurs", image: "/images/Bardon.avif", liked: false },
];

function App() {
  const [myAnimals, setMyAnimals] = useState(initialAnimals);

  const toggleLike = (nom) => {
    setMyAnimals(
      myAnimals.map((a) => (a.nom === nom ? { ...a, liked: !a.liked } : a))
    );
  };

  return (
    <BrowserRouter>
      <Menu />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/animals"
            element={<Animals animals={myAnimals} onToggleLike={toggleLike} />}
          />
          <Route path="/birds" element={<Birds />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;