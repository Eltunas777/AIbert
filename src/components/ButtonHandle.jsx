
function ButtonHandle({ handle, title = "boton" }) {
  return (
    <button
      onClick={handle}
      type="button"
      className="container flex w-full h-[45px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg"
    >
      <h1 className="text-white font-poppins text-sm font-semibold uppercase mx-auto my-auto">{title}</h1>
    </button>
  );
}

export default ButtonHandle;
