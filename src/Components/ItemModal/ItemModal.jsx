import { useEffect, useState } from "react";
import { PokePictureUrl, getPokemonInfo } from "../../utils/PokemonApi";

const ItemModal = ({ selectedCard, onClose }) => {
  const [pokemonTypeOne, setPokemonTypeOne] = useState("");
  const [pokemonTypeTwo, setPokemonTypeTwo] = useState("");
  const [pokemonWeight, setPokemonWeight] = useState("");

  const pokeIndex = selectedCard.url.split("/")[6];

  useEffect(() => {
    getPokemonInfo(pokeIndex)
      .then((data) => {
        console.log(data);
        const typeOne = data.types[0].type.name;
        setPokemonTypeOne(typeOne);
        if (data.types[1]) {
          const typeTwo = data.types[1].type.name;
          setPokemonTypeTwo(typeTwo);
        }
        const weight = data.weight;
        setPokemonWeight(weight);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="modal">
      <div className="modal__content modal__content_type_image">
        <button type="button" onClick={onClose} className="modal__close-btn">
          X
        </button>
        <img
          src={`${PokePictureUrl}/${pokeIndex}.png`}
          alt="Pokemon"
          className="modal__image"
        />
        <div className="modal__info">
          <p className="modal__text-name">
            {selectedCard.name.charAt(0).toUpperCase() +
              selectedCard.name.slice(1)}
          </p>
          <p className="modal__text-type">
            {pokemonTypeOne.charAt(0).toUpperCase() + pokemonTypeOne.slice(1)}
          </p>
          <p className="modal__text-type">
            {pokemonTypeTwo.charAt(0).toUpperCase() + pokemonTypeTwo.slice(1)}
          </p>
          <p className="modal__text-weight">{pokemonWeight}lbs</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
