import React, { useState, useContext } from "react";
import GoogleSignIn from "./GoogleSignIn";
import UserRegistrationForm from "./UserRegistrationForm";
import { UserContext } from "../context/UserContext";
import ButtonHandle from "../components/ButtonHandle";

function CardLogin() {
  const { user, login, logout } = useContext(UserContext);
  const [newUserInfo, setNewUserInfo] = useState(null);

  const handleNewUser = (userInfo) => {
    console.log("funcion callback");
    setNewUserInfo(userInfo); // Actualiza el estado con la información del nuevo usuario
  };
  if (newUserInfo) {
    console.log("newUserInfo correcto");
  }
  if (user) {
    console.log("user correcto");
  }

  if (user && newUserInfo) {
    console.log("se procede a mostrar el formulario user registration form");
    // Mostrar formulario de registro para nuevos usuarios
    return <UserRegistrationForm userInfo={newUserInfo} />;
  }

  return (
    <div className="border-solid p-5 m-3 text-center w-[350px] bg-white inline-block">
      <h2 className="py-3 font-poppins font-bold">Ingresar</h2>

      <form className="space-y-3">
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="email"
          placeholder="Correo"
        />
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="password"
          placeholder="Contraseña"
        />
        <div className="w-full h-[50px]">
          {/* Suponiendo que ButtonS es un componente para un botón */}
          {/* Reemplaza con la lógica adecuada para el inicio de sesión */}
          {/* <button type="button" onClick={login}>Ingresar</button> */}
          <ButtonHandle handle={login} title="Ingresar" />
        </div>
        <hr className="border-sombra-boton border-b-1 shadow-xl" />

        <GoogleSignIn onNewUser={handleNewUser} />
        <p className="font-poppins font-light text-gray-400 text-[10px]">
          Al registrarte en AIBert, aceptas nuestros Términos y Políticas de
          privacidad.
        </p>
      </form>

      {/* {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )} */}
    </div>
  );
}

export default CardLogin;
