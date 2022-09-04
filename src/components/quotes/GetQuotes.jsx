import React from "react";
import useSWR from "swr";

function GetQuotes() {
  let { data } = useSWR("https://dolar-blue-app.herokuapp.com/quotes");
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return (
    <>
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="bg-primary p-4 lg:p-2 mt-2 mb-2 w-[18rem] m-auto rounded-md lg:h-[10rem]  "
          >
            <div>
              <div className="text-xl font-bold lg:mt-2">
                <a href={e.source} target="_blank" rel="noreferrer">
                  {" "}
                  {e.name_page}{" "}
                </a>
              </div>
            </div>

            <div className="mt-4 text-md flex justify-around ">
              <div>
                Compra:{" "}
                <span className="text-lg ">
                  <p>{e.buy_price}$</p>
                </span>
              </div>
              <div>
                Venta:{" "}
                <span className="text-lg ">
                  <p>{e.sell_price}$</p>
                </span>
              </div>
            </div>
            <div className="text-sm mt-4 ">
              <span>{("0" + day).slice(-2)}/</span>
              <span>{("0" + month).slice(-2)}/</span>
              <span>{year}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default GetQuotes;
