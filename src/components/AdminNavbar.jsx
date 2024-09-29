import React, { useState } from "react";
import { useHistory, Link, useLocation } from 'react-router-dom';
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import logo from "../assets/logo.png";
import firebaseApp from '../firebaseConfig';
import {getAuth, signOut} from "firebase/auth";
import svgi from "../assets/lista-de-verificacion.png"
const auth = getAuth(firebaseApp)


const AdminNavbar = () => {

    const history = useHistory();
    const location = useLocation();
    const cerrarSesion = () => {
        signOut(auth);
        localStorage.removeItem('usuario');
        history.push("/");
      }

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-4 navbar z-10">
      <Link to="/home">
      <img src={logo} alt="Wonderful3D" className="w-[164px] h-[47,14px]" />
      </Link>
      <ul className="lint-none justify-end items-center flex-1 sm:flex hidden">
        <li className={`font-poppins font-normal cursor-pointer text- text-base mr-10 ${location.pathname === "/home" ? "text-blue-400" : "text-white"}`}>
          <a href="/home">Inicio</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text- text-base mr-10 ${location.pathname === "/manual" ? "text-blue-400" : "text-white"}`}>
          <a href="/manual">Manual</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text- text-base mr-10 ${location.pathname === "/videos" ? "text-blue-400" : "text-white"}`}>
          <a href="/videos">Videos</a>
        </li>
        {/* <li className={`font-poppins font-normal cursor-pointer text- text-base mr-10 ${location.pathname === "/asistencias" ? "text-blue-400" : "text-white"}`}>
            <a href="/asistencias">Registros</a>
        </li> */}
        <li className={`font-poppins font-normal cursor-pointer text- text-base mr-10 ${location.pathname === "/lista-asistentes" ? "text-blue-400" : "text-white"}`}>
          <a href="/lista-asistentes">Asistentes</a>
        </li>
        {/* <li className={`font-poppins font-normal cursor-pointer text- text-base mr-10 ${location.pathname === "/productos" ? "text-blue-400" : "text-white"}`}>
          <a href="/productos">Calculadora</a>
        </li>  */}
        <li className="font-poppins font-normal cursor-pointer text-white text-base">
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center z-20">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex-container" : "hidden"
          } p-6 bg-black bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="lint-none justify-center items-center flex-1 flex flex-col">
            <li className="font-poppins font-normal cursor-pointer text-white text-base mb-4">
              <a href="/home">Inicio</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-white text-base mb-4">
              <a href="/manual">Manual</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-white text-base mb-4">
              <a href="/videos">Videos</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-white text-base mb-4">
              <a href="/asistencias">Registros</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-white text-base mb-4">
              <a href="/lista-asistentes">Asistentes</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-white text-base mb-4">
              <a href="/productos">Calculadora</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-white text-base">
                <button onClick={cerrarSesion}>Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;