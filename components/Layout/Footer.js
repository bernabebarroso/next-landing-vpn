import React from "react";
import FacebookIcon from "../FacebookIcon"
import TwitterIcon from "../TwitterIcon"
import InstagramIcon from "../InstagramIcon"

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p className="mb-4">
            <strong className="font-medium">LoremVPN</strong> es una red virtual privada que tiene funcionalidades unicas y seguridad elevada.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FacebookIcon className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <TwitterIcon className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <InstagramIcon className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - LoremVPN</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Nuestro producto</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Descargar{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Precio{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Ubicacion{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Servidores{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Paises{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Unete</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              LoremVPN{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutoriales{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Acerca de nosotros{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Politica de privacidad{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terminos de servicio{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Gana dinero</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Invierte{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Vuelvete uno de nosotros{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
