import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { PokemonInfo } from "./Interfaces/PokemonsInterface";

import Listado from "./components/Listado";
import Navegacion from "./components/Navegacion";
import { getPokemones } from "./helpers/getFromApi";
import Ordenar from "./components/Ordenar";

function App() {
  const [pokemon, setPokemons] = useState<PokemonInfo[]>([]);
  const [orden, setOrden] = useState<string>("numero");
  const [orden2, setOrden2] = useState<number>(0);

  useEffect(() => {
    async function get() {
      await getPokemones().then((resultado) => setPokemons(resultado));
    }

    if (pokemon.length === 0) {
      get();
    }
    /* else if (orden === "numero") {
      setPokemons((prevstate) => prevstate.sort((a, b) => a.order - b.order));
    } else if (orden === "peso") {
      setPokemons((prevstate) => prevstate.sort((a, b) => a.weight - b.weight));
    } else {
      setPokemons((prevstate) => prevstate.sort((a, b) => a.height - b.height));
    } */
  }, [pokemon.length, orden]);

  const sortedPokemon = useMemo(() => {
    if (orden === "altura") {
      if (orden2 === 1) {
        return pokemon.sort((a, b) => b.height - a.height);
      } else {
        return pokemon.sort((a, b) => a.height - b.height);
      }
    }
    if (orden === "numero") {
      if (orden2 === 1) {
        return pokemon.sort((a, b) => b.order - a.order);
      } else {
        return pokemon.sort((a, b) => a.order - b.order);
      }
    }
    if (orden === "peso") {
      if (orden2 === 1) {
        return pokemon.sort((a, b) => b.weight - a.weight);
      } else {
        return pokemon.sort((a, b) => a.weight - b.weight);
      }
    }
  }, [orden, orden2, pokemon]);

  return (
    <>
      <Navegacion />
      <Ordenar
        orden={orden}
        orden2={orden2}
        setOrden={setOrden}
        setOrden2={setOrden2}
      />
      <Listado listado={sortedPokemon} />
    </>
  );
}

export default App;
