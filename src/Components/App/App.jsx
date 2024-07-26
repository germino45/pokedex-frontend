import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
//import { getPokemon } from "../../utils/PokemonApi.js";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";

function App() {
  const [searchText, setSearchText] = useState("");
  /* let allPokemon = [];

  const processServerResponse = (res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };

  fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then(processServerResponse)
    .then((data) => {
      allPokemon = data.results;
      console.log(allPokemon);
    })
    .catch((err) => {
      console.log(err);
    }); */

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  console.log(searchText);

  return (
    <div className="app">
      <Header onChange={handleSearchTextChange} />
      <Routes>
        <Route path="/" element={<Main searchText={searchText} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
