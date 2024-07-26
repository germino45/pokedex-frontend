import React from "react";

const ItemCard = ({ pokeIndex, name }) => {
  return (
    <button className="item__card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`}
      />
      <p className="item__number">{pokeIndex}</p>
      <p className="item__name">{name}</p>
    </button>
  );
};

export default ItemCard;
