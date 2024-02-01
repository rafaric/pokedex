import Navegacion from "../components/Navegacion";

const Acercade = () => {
  return (
    <>
      <Navegacion />
      <div className="flex flex-col w-[90%] mx-auto md:my-10 py-10 border-2 border-black bg-slate-300 rounded-lg ">
        <h1 className="text-2xl py-6 text-center">Acerca de Nosotros</h1>
        <p className="text-lg text-center pb-6">
          Esta página ha sido realizada para la prueba técnica de Foo Talent
          Group, por Rafael Ricardo Strongoli - FrontEnd Developer
        </p>
        <p className="text-md text-center">
          Se ha utilizado React, Typescript y TailwindCSS
        </p>
        <div className="mx-auto pt-12">
          <a
            href="https://www.linkedin.com/in/rafael-strongoli/"
            target="_blank"
            className="mx-2 text-blue-800 hover:text-blue-950 "
          >
            Linkedin
          </a>
          <a
            className="mx-2 text-blue-800 hover:text-blue-950 "
            href="https://github.com/rafaric"
            target="_blank"
          >
            Github
          </a>
          <a
            className="mx-2 text-blue-800 hover:text-blue-950 "
            href="https://portfolio-rafaric.vercel.app/"
            target="_blank"
          >
            Portfolio
          </a>
        </div>
      </div>
    </>
  );
};

export default Acercade;
