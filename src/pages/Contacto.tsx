import { useState } from "react";
import Navegacion from "../components/Navegacion";

interface FormData {
  nombre?: string | undefined;
  email?: string | undefined;
  mensaje?: string | undefined;
}

const Contacto = () => {
  const [formData, setFormData] = useState<FormData>();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Datos enviados correctamente. Gracias por su mensaje");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };
  const handleClear = () => {
    setFormData({ nombre: "", email: "", mensaje: "" });
  };
  return (
    <div>
      <Navegacion />
      <div className="flex justify-center w-[90%] mx-auto">
        <div className="w-full flex flex-col items-center">
          <h1 className="py-6 font-bold text-xl">Contactenos:</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[90%] justify-center gap-5"
          >
            <input
              className="px-4 rounded-md"
              name="nombre"
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              value={formData?.nombre}
            />
            <input
              className="px-4 rounded-md"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData?.email}
            />
            <textarea
              name="mensaje"
              value={formData?.mensaje}
              className="px-4 rounded-md text-center h-20"
              placeholder="Mensaje"
              onChange={handleChange}
            />
            <div className="flex flex-col md:flex-row w-full gap-3 md:gap-0">
              <button className="border-2 border-blue-200 hover:border-blue-400 hover:bg-yellow-200 rounded-lg md:w-[30%] w-full mx-auto">
                Enviar
              </button>
              <button
                type="reset"
                className="md:w-[30%] mx-auto border-2 border-red-300 hover:border-red-400 hover:bg-orange-200 rounded-lg w-full"
                onClick={handleClear}
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
