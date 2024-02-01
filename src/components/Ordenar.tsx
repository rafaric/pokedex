import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Ordenar = ({
  orden,
  orden2,
  setOrden,
  setOrden2,
}: {
  orden: string;
  orden2: number;
  setOrden: React.Dispatch<React.SetStateAction<string>>;
  setOrden2: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const onClickPeso = () => {
    setOrden("peso");
  };
  const onClickNumero = () => {
    setOrden("numero");
  };
  const onClickAltura = () => {
    setOrden("altura");
  };
  const onClickAsc = () => {
    setOrden2(0);
  };
  const onClickDesc = () => {
    setOrden2(1);
  };
  return (
    <div className="flex flex-col w-full items-center">
      <p>Ordenar por...</p>
      <div className="flex gap-3">
        <div className="flex rounded-md hover:border-2 border-2 cursor-pointer justify-center text-center">
          <button
            className={`bg-slate-400 hover:bg-slate-500 cursor-pointer rounded-l-md px-3 w-20 border-r-2 hover:text-white ${
              orden === "peso" ? "bg-slate-600 text-white" : ""
            }`}
            onClick={onClickPeso}
          >
            Peso
          </button>
          <button
            className={` bg-slate-400 hover:bg-slate-500 cursor-pointer px-3 w-20 hover:text-white ${
              orden === "numero" ? "bg-slate-600 text-white" : ""
            }`}
            onClick={onClickNumero}
          >
            Número
          </button>
          <button
            className={`bg-slate-400 hover:bg-slate-500 cursor-pointer border-l-2 rounded-r-md px-3 w-20 hover:text-white ${
              orden === "altura" ? "bg-slate-600 text-white" : ""
            }`}
            onClick={onClickAltura}
          >
            Altura
          </button>
        </div>
        <div
          title="Descendiente - Ascendente"
          className="flex rounded-md border-2 cursor-pointer justify-center text-center"
        >
          <button
            className={`w-8 border-r-2 px-2 hover:bg-slate-200 rounded-l-md ${
              orden2 === 1 ? "bg-black text-white" : ""
            }`}
            onClick={onClickDesc}
            title="Descendente"
          >
            <FaAngleDown />
          </button>
          <button
            className={`w-8 px-2 hover:bg-slate-200 rounded-r-md ${
              orden2 === 0 ? "bg-black text-white" : ""
            }`}
            onClick={onClickAsc}
          >
            <FaAngleUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ordenar;
