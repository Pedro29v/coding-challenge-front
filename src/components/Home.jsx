import React from "react";
import GetQuotes from "./quotes/GetQuotes";
import GetAverage from "./average/GetAverage";
import GetSlippage from "./slippage/GetSlippage";
import Navbar from "./navbar/Navbar";

function Home() {
  return (
    <div className="bg-secondary text-white w-screen h-[auto]  ">
      <Navbar />

      <div>
        <div className="p-4 mt-[10rem] w-screen m-auto rounded-sm bg-strong lg:text-lg lg:w-[50rem] ">
          <GetAverage />
        </div>

        <div className=" mt-[4rem] ">
          <div className=" p-2 lg:flex ">
            <GetQuotes />
          </div>
          <div className="lg:flex">
            <GetSlippage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
