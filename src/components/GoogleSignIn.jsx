import React from "react";
import { auth, firestore } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = ({ onNewUser }) => {
  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const userRef = doc(firestore, "Usuarios", result.user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        console.log("nuevo usuario");
        // Si es un nuevo usuario
        onNewUser(result.user); // Llama a la función de callback con la información del usuario
      } else {
        // Manejo para usuario existente
        console.log("Usuario existente. No se requiere registro adicional.");
      }
    } catch (error) {
      console.error("Error en inicio de sesión con Google:", error);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="container flex mx-auto w-full h-[45px] bg-white rounded-2xl p-2 shadow-lg"
    >
      <FcGoogle size={30} className="ml-3 my-auto fill-blue-500" />
      <h1 className="text-blue-500 font-poppins text-sm font-bold uppercase mx-auto my-auto pr-11">
        Google
      </h1>
    </button>
  );
};

export default GoogleSignIn;
