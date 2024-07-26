import React from "react";

const ItemCard = ({ pokeIndex, name }) => {
  return (
    <button className="item__card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokeIndex + 1
        }.png`}
      />
      <p className="item__number">{pokeIndex + 1}</p>
      <p>{name}</p>
    </button>
  );
};

export default ItemCard;
