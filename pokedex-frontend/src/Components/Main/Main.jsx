import React, { useEffect, useState } from "react";
import { getPokemon } from "../../utils/PokemonApi";

import ItemCard from "../ItemCard/ItemCard";

const Main = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    getPokemon()
      .then((data) => {
        const pokemonList = data.results;
        setPokemon(pokemonList);
        pokemonList.forEach((item) => {});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      {pokemon.map((pokeIndex, id) => {
        return <ItemCard key={id} pokeIndex={id} name={pokemonName} />;
      })}
    </main>
  );
};

export default Main;
