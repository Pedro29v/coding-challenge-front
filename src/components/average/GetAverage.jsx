import React from "react";
import useSWR from "swr";

function GetAverage() {
  let { data } = useSWR("http://localhost:3001/average");

  return (
    <>
      <div className="lg:flex justify-around">
        <div>
          Promedio de compra:{" "}
          <span className="text-bold text-xl">{data.average_buy_price} $</span>
        </div>
        <div>
          Promedio de venta:{" "}
          <span className="text-bold text-xl">{data.average_sell_price} $</span>
        </div>
      </div>
    </>
  );
}

export default GetAverage;
