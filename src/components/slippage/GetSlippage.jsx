import React from "react";
import useSWR from "swr";

function GetSlippage() {
  let { data } = useSWR("https://coding-challenge-back-production.up.railway.app/slippage");
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
                {e.buy_price_slippage > 0 ? (
                  <p className="text-green-700 ">{e.buy_price_slippage}%</p>
                ) : e.buy_price_slippage < 0 ? (
                  <p className="text-red-600 ">{e.buy_price_slippage}%</p>
                ) : (
                  <p className="text-white">{e.buy_price_slippage}%</p>
                )}
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
