import React, { useEffect, useState } from "react";
import { getPokemon } from "../../utils/PokemonApi";

import ItemCard from "../ItemCard/ItemCard";

const Main = ({ searchText }) => {
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
      {pokemon
        .filter((pokeObject) => {
          return pokeObject.name.includes(searchText);
        })
        .map((pokeObject, id) => {
          return <ItemCard key={id} pokeIndex={id} name={pokeObject.name} />;
        })}
    </main>
  );
};

export default Main;
