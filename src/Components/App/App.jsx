import React from "react";
import { useEffect, useState } from "react";
import { getPokemonList, getPokemonInfo } from "../../utils/PokemonApi";
import { Routes, Route } from "react-router-dom";
//import { getPokemon } from "../../utils/PokemonApi.js";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    setIsLoading(true);
    getPokemonList()
      .then((data) => {
        const pokemonList = data.results
          .slice(0, data.results.length)
          .map((items) => items)
          .flat();
        setPokemon(pokemonList);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleOverlyClick = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlyClick);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlyClick);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <Header onChange={handleSearchTextChange} />
      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <Preloader />
            ) : (
              <Main
                pokemon={pokemon}
                searchText={searchText}
                onSelectCard={handleSelectedCard}
              />
            )
          }
        />
      </Routes>

      <Footer />

      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
