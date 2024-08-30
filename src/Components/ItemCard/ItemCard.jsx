import React from "react";
import { PokePictureUrl } from "../../utils/PokemonApi";

const ItemCard = ({ card, onSelectCard }) => {
  const pokeIndex = card.url.split("/")[6];

  return (
    <button
      className="item__card"
      onClick={() => {
        onSelectCard(card);
      }}>
      <img src={`${PokePictureUrl}/${pokeIndex}.png`} />
      <p className="item__number">{pokeIndex}</p>
      <p className="item__name">
        {card.name.charAt(0).toUpperCase() + card.name.slice(1)}
      </p>
    </button>
  );
};

export default ItemCard;
