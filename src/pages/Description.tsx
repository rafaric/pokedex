import { useParams } from "react-router-dom";
import Navegacion from "../components/Navegacion";
import { getPokemonInfo } from "../helpers/getFromApi";
import { useState } from "react";
import { PokemonInfo } from "../Interfaces/PokemonsInterface";

const Description = () => {
  const [pokemon, setPokemon] = useState<PokemonInfo>();
  const [hideS, setHideS] = useState<boolean>(true);
  const [hideM, setHideM] = useState<boolean>(true);
  const { id } = useParams();
  if (id) {
    getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${id}`).then((result) => {
      const modifiedPokemon = {
        ...result,
        image: result.sprites.other.dream_world.front_default,
      };
      setPokemon(modifiedPokemon);
    });
  }

  const onClickStats = () => {
    setHideS(!hideS);
  };
  const onClickMoves = () => {
    setHideM(!hideM);
  };
  return (
    <div>
      <Navegacion />
      {pokemon ? (
        <div className="flex flex-col md:flex-row my-10 mx-auto md:justify-between w-[90%] items-center border-2  border-orange-300 rounded-lg shadow-xl p-3 bg-yellow-100/40 md:h-full">
          <div className="md:w-[50%] w-[80%] flex md:py-0 md:flex-col md:items-start justify-center py-4 bg-yellow-100 rounded-full md:mx-10 md:relative md:h-full">
            <img src={pokemon?.image} className="w-[80%] md:w-full " />
          </div>
          <div className="flex flex-col items-center w-full my-3">
            <h1 className="text-2xl p-2 bg-blue-200 rounded-full">
              {pokemon.name.toUpperCase()}
            </h1>
            <div className="w-full pt-10">
              <ul className="list-none">
                <li>Experiencia base: {pokemon.base_experience}</li>
                <li>Número de orden: {pokemon.order}</li>
                <li>Peso: {pokemon.weight / 10} Kg.</li>
                <li>Altura: {(pokemon.height * 0.1).toFixed(2)} metros</li>
                <li>Especie: {pokemon.species.name}</li>
                <li>
                  Tipos:{" "}
                  {pokemon.types.map((type) => (
                    <div className="inline">
                      <span>{type.type.name}</span>{" "}
                      {pokemon.types.length > 1 ? " - " : ""}
                    </div>
                  ))}
                </li>
                <li
                  className="hover:font-bold cursor-pointer"
                  onClick={onClickStats}
                >
                  Estadísticas:
                  {hideS ? (
                    <span className="text-blue-400 hover:decoration-solid hover:underline">
                      {" "}
                      Click para expandir...
                    </span>
                  ) : (
                    ""
                  )}
                  {pokemon.stats.map((stat) => (
                    <li
                      className={`ml-16 w-[80%] bg-blue-200 rounded-full px-3 my-1 ${
                        hideS ? "hidden" : ""
                      }`}
                    >
                      {stat.stat.name} - {stat.base_stat}
                    </li>
                  ))}
                </li>
                <li
                  className="hover:font-bold cursor-pointer"
                  onClick={onClickMoves}
                >
                  Movimientos:
                  {hideM ? (
                    <span className="text-blue-400 hover:decoration-solid hover:underline">
                      {" "}
                      Click para expandir...
                    </span>
                  ) : (
                    ""
                  )}
                  {pokemon.moves.map((move) => (
                    <li
                      className={`ml-16 w-[80%] bg-blue-200 rounded-full px-3 my-1 ${
                        hideM ? "hidden" : ""
                      }`}
                    >
                      {move.move.name}
                    </li>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">Loading...</div>
      )}
    </div>
  );
};

export default Description;
