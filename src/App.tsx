import { useEffect, useState } from "react";
import "./App.css";
import { PokemonInfo } from "./Interfaces/PokemonsInterface";

import Listado from "./components/Listado";
import Navegacion from "./components/Navegacion";
import { getPokemones } from "./helpers/getFromApi";
import Ordenar from "./components/Ordenar";
import Bienvenida from "./components/Bienvenida";

function App() {
  const [pokemon, setPokemons] = useState<PokemonInfo[]>([]);
  const [orden, setOrden] = useState<"asc" | "desc">("asc");
  const [orden2, setOrden2] = useState<"id" | "weight" | "height">("id");

  useEffect(() => {
    async function fetchData() {
      const response = await getPokemones();
      setPokemons(response);
    }

    fetchData();
  }, []);
  //Funcion para ordenar los pokemones
  const sortPokemons = (
    pokemons: PokemonInfo[],
    sortBy: "id" | "weight" | "height",
    order: "asc" | "desc"
  ) => {
    return pokemons.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return order === "asc" ? -1 : 1;
      } else if (a[sortBy] > b[sortBy]) {
        return order === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
  };
  //Funcion para cambiar el criterio de ordenamiento
  const handleChangeSortBy = (newSortBy: "id" | "weight" | "height") => {
    setOrden2(newSortBy);
    const sortedPokemons = sortPokemons(pokemon, newSortBy, orden);
    setPokemons(sortedPokemons);
  };

  //Funcion para cambiar el orden de ordenamiento
  const handleChangeOrder = (newOrder: "asc" | "desc") => {
    setOrden(newOrder);
    const sortedPokemons = sortPokemons(pokemon, orden2, newOrder);
    setPokemons(sortedPokemons);
  };
  return (
    <>
      <Navegacion />
      <Ordenar
        order={orden}
        sortBy={orden2}
        onChangeSortBy={handleChangeSortBy}
        onChangeOrder={handleChangeOrder}
      />
      {!pokemon?.length ? <Bienvenida /> : <Listado listado={pokemon} />}
    </>
  );
}

export default App;
