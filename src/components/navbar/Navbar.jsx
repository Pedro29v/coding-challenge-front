import React from "react";

function Navbar() {
  return (
    <div
      className="w-screen bg-tertiary text-white p-2 font-mono font-bold 
    text-[1.5em] lg:text-[2.5rem] shadow-black shadow-md fixed top-0 left-0 right-0"
    >
      <h1>
        Dolar <strong className="text-blue-500 ">Blue</strong> Price
      </h1>
    </div>
  );
}

export default Navbar;
