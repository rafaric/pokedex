import { PokemonInfo } from "../Interfaces/PokemonsInterface";
import Card from "./Card";

const Listado = ({ listado }: { listado: PokemonInfo[] | undefined }) => {
  return (
    <div className="flex flex-wrap w-full gap-2 h-[90%] justify-center py-10">
      {listado && listado.map((poke) => <Card pokemonInfo={poke} />)}
    </div>
  );
};

export default Listado;
