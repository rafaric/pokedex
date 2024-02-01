import pokedex from "../assets/pokedex.webp";
const Bienvenida = () => {
  return (
    <div className="w-full mx-auto text-center py-4 flex flex-col items-center gap-5 h-[500px] justify-center">
      <h1 className="text-3xl">Bienvenidos!</h1>
      <img src={pokedex} alt="Pokedex" width={200} height={200} />
      <p className="text-white underline">Seleccione un orden para empezar</p>
    </div>
  );
};

export default Bienvenida;
