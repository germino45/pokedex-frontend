import ItemCard from "../ItemCard/ItemCard";

const Main = ({ pokemon, searchText, onSelectCard }) => {
  const pokemonCards = pokemon.filter((pokeObject) => {
    return (
      pokeObject.name.includes(searchText) ||
      pokeObject.url.split("/")[6].includes(searchText)
    );
  });

  return (
    <main className="main">
      {pokemonCards
        .filter((pokeObject) => {
          return (
            pokeObject.name.includes(searchText) ||
            pokeObject.url.split("/")[6].includes(searchText)
          );
        })
        .map((card, id) => {
          return <ItemCard key={id} card={card} onSelectCard={onSelectCard} />;
        })}
    </main>
  );
};

export default Main;
