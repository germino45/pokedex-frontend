import pokemonGroup from "../../images/pokemon_group.png";

function About() {
  return (
    <div className="about">
      <h2 className="about__text">About the Developer</h2>
      <p className="about__text">
        I have been utilizing React for the past year creating fun projects. I
        chose to create a Pokedex because Pokemon holds a special place in my
        heart. I hope you learned a little something while here and can't wait
        for you to check back soon for more features!
      </p>
      <img className="about__picture" src={pokemonGroup} alt="pokemon" />
    </div>
  );
}

export default About;
