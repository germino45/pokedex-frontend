import React, { useEffect, useState } from "react";
import { getPokemon } from "../../utils/PokemonApi";

import ItemCard from "../ItemCard/ItemCard";

const Main = ({ searchText }) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    getPokemon()
      .then((data) => {
        const pokemonList = data.results
          .slice(0, data.results.length)
          .map((items) => items)
          .flat();
        setPokemon(pokemonList);
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
          return (
            <ItemCard
              key={id}
              pokeIndex={pokeObject.url.split("/")[6]}
              name={
                pokeObject.name.charAt(0).toUpperCase() +
                pokeObject.name.slice(1)
              }
            />
          );
        })}
    </main>
  );
};

export default Main;
