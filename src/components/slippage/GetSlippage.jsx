import React from "react";
import useSWR from "swr";

function GetSlippage() {
  let { data } = useSWR("http://localhost:3001/slippage");
  return (
    <>
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="bg-tertiary text-white w-[20rem] m-auto rounded-md p-2 mb-2  lg:h-[6rem]"
          >
            <div className="text-md lg:flex lg:justify-around">
              <div>
                <p className="text-md">Slippage-Compra: </p>
                <p>{e.buy_price_slippage}%</p>
              </div>
              <div>
                <p className="text-md">Slippage-venta:</p>
                <p>{e.sell_price_slippage}% </p>
              </div>
            </div>

            <div className="text-sm mt-2">
              <a href={e.source} target="_blank" rel="noreferrer">
                {" "}
                {e.name_page}{" "}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default GetSlippage;
