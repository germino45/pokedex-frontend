import { processServerResponse } from "./api";

export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const PokePictureUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export const getPokemonList = () => {
  const pokeList = fetch(`${baseUrl}?limit=1025&offset=0`).then(
    processServerResponse
  );

  return pokeList;
};

export const getPokemonInfo = (number) => {
  const pokeInfo = fetch(`${baseUrl}/${number}`).then(processServerResponse);

  return pokeInfo;
};
