import React from "react";

function Button(props) {
  return (
    <button className="bg-sky-400 text-white font-[Poppins] py-2 px-6 rounded-lg md:ml-8 hover:bg-sky-500 duration-300">
      {props.children}
    </button>
  );
}

export default Button;
