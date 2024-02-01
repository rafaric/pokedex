import { useNavigate } from "react-router-dom";
import { PokemonInfo } from "../Interfaces/PokemonsInterface";

const Card = ({ pokemonInfo }: { pokemonInfo: PokemonInfo }) => {
  const Navigation = useNavigate();
  return (
    <div
      className="bg-yellow-50 border border-black w-[40%] md:w-[20%] h-[350px] rounded-md p-2 shadow-yellow-400 shadow-md hover:scale-105 hover:transition-transform duration-500 hover:bg-blue-200"
      onClick={() => Navigation(`/${pokemonInfo.id}`)}
    >
      <h1 className="text-center pb-2 text-xl">
        {pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1)}
      </h1>
      <img
        className="w-[90%] h-[60%] pb-2"
        src={pokemonInfo.sprites.other.dream_world.front_default}
        alt=""
      />
      <div>
        <p>Peso: {(pokemonInfo.weight * 0.1).toFixed(2)} Kg.</p>
        <p>Altura: {pokemonInfo.height / 10} mts.</p>
        <p>Numero: {pokemonInfo.order}</p>
      </div>
    </div>
  );
};

export default Card;
