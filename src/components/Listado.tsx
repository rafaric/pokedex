import { PokemonInfo } from "../Interfaces/PokemonsInterface";
import Card from "./Card";

const Listado = ({ listado }: { listado: PokemonInfo[] | undefined }) => {
  return (
    <>
      {listado &&
        listado.map((poke) => <Card key={poke.id} pokemonInfo={poke} />)}
    </>
  );
};

export default Listado;
