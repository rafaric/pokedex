import { PokemonInfo } from "../Interfaces/PokemonsInterface";
interface Pokemon {
  name: string;
  url: string;
}

export const getPokemones = async () => {
  const lista: PokemonInfo[] = [];
  await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    .then((response) => response.json())
    .then((data) => data)
    .then((result) => {
      result.results.map((poke: Pokemon) => {
        getPokemonInfo(poke.url).then((result) => {
          lista.push(result);
        });
      });
    });
  return lista;
};

export const getPokemonInfo = async (url: string) => {
  const pokemon = await fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  return pokemon;
};
