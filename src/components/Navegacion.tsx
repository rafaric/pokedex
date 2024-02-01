import { useNavigate } from "react-router-dom";
import pokelogo from "../assets/pokedex-3d-logo.png";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";

export interface INavegacion {
  pokelogo: string;
}
const Navegacion = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const Navigation = useNavigate();
  const onClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex gap-3 justify-between relative">
      <img src={pokelogo} alt="logo" width={230} height={300} />
      <nav
        className={`justify-end flex-col flex  ${
          menu ? "bg-blue-200/60" : ""
        } rounded-md list-none gap-1 absolute right-4 top-6 pt-1 pr-2 pb-2 md:flex-row`}
      >
        <button
          className="flex justify-end cursor-pointer md:hidden"
          onClick={onClickMenu}
        >
          <FaAlignJustify />
        </button>
        <li
          className={`md:border-red-200 md:border-4 rounded-lg px-4 md:block md:bg-orange-300 hover:bg-orange-600 cursor-pointer ${
            menu ? "block" : "hidden"
          }`}
          onClick={() => Navigation("/")}
        >
          Inicio
        </li>
        <li
          className={`md:border-red-200 md:border-4 rounded-lg px-4 md:block md:bg-orange-300 hover:bg-orange-600 cursor-pointer ${
            menu ? "block" : "hidden"
          }`}
          onClick={() => Navigation("/contacto")}
        >
          Contacto
        </li>
        <li
          onClick={() => Navigation("/acercade")}
          className={`md:border-red-200 md:border-4 rounded-lg px-4 md:bg-orange-300 md:block hover:bg-orange-600 cursor-pointer ${
            menu ? "block" : "hidden"
          }`}
        >
          Acerca de
        </li>
      </nav>
    </div>
  );
};

export default Navegacion;
