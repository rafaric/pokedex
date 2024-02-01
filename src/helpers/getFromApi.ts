export interface Welcome {
  id: number;
  name: string;
  image?: Image;
  weight: number;
  height: number;
}

export interface Image {
  sprites: Sprites;
}

export interface Sprites {
  front_default: string;
}

export const getPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
  const data = await response.json();

  const promises = data.results.map(
    async (result: { name: string; url: string }) => {
      const pokemonResponse = await fetch(result.url);
      const pokemon = await pokemonResponse.json();

      return {
        id: pokemon.id,
        order: pokemon.order,
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        image: pokemon.sprites.other.dream_world.front_default,
        stats: pokemon.stats,
        types: pokemon.types,
        abilities: pokemon.abilities,
        moves: pokemon.moves,
        species: pokemon.species,
      };
    }
  );

  return Promise.all(promises);
};

export const getPokemonInfo = async (url: string) => {
  const pokemon = await fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  return pokemon;
};
