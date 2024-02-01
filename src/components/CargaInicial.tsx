import pokedex from "../assets/pokedex.webp";
const CargaInicial = () => {
  return (
    <div className="w-full mx-auto text-center py-4 flex flex-col items-center gap-5 h-[500px] justify-center">
      <h1 className="text-3xl">Bienvenidos!</h1>
      <img src={pokedex} alt="Pokedex" width={400} height={400} />
    </div>
  );
};

export default CargaInicial;
