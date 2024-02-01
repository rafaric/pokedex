import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface SortProps {
  sortBy: "id" | "weight" | "height";
  order: "asc" | "desc";
  onChangeSortBy: (newSortBy: "id" | "weight" | "height") => void;
  onChangeOrder: (newOrder: "asc" | "desc") => void;
}

const Ordenar = ({
  sortBy,
  order,
  onChangeSortBy,
  onChangeOrder,
}: SortProps) => {
  const onClickPeso = () => {
    onChangeSortBy("weight");
  };
  const onClickNumero = () => {
    onChangeSortBy("id");
  };
  const onClickAltura = () => {
    onChangeSortBy("height");
  };
  const onClickAsc = () => {
    onChangeOrder("asc");
  };
  const onClickDesc = () => {
    onChangeOrder("desc");
  };
  return (
    <div className="flex flex-col w-full items-center">
      <p>Ordenar por...</p>
      <div className="flex gap-3">
        <div className="flex rounded-md hover:border-2 border-2 cursor-pointer justify-center text-center">
          <button
            className={`bg-slate-400 hover:bg-slate-500 cursor-pointer rounded-l-md px-3 w-20 border-r-2 hover:text-white ${
              sortBy === "weight" ? "bg-slate-600 text-white" : ""
            }`}
            onClick={onClickPeso}
          >
            Peso
          </button>
          <button
            className={` bg-slate-400 hover:bg-slate-500 cursor-pointer px-3 w-20 hover:text-white ${
              sortBy === "id" ? "bg-slate-600 text-white" : ""
            }`}
            onClick={onClickNumero}
          >
            Número
          </button>
          <button
            className={`bg-slate-400 hover:bg-slate-500 cursor-pointer border-l-2 rounded-r-md px-3 w-20 hover:text-white ${
              sortBy === "height" ? "bg-slate-600 text-white" : ""
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
              order === "desc" ? "bg-black text-white" : ""
            }`}
            onClick={onClickDesc}
            title="Descendente"
          >
            <FaAngleDown />
          </button>
          <button
            className={`w-8 px-2 hover:bg-slate-200 rounded-r-md ${
              order === "asc" ? "bg-black text-white" : ""
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
