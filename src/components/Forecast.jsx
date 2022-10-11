import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  console.log(items);
  if (!items) return <div>Data forcast tidak ada</div>;
  console.log(items);

  function ListForecast() {
    const list = [];
    for (let i = 0; i < items.list.length; i++) {
      const forecastItem = items.list[i];
      const timeDate = forecastItem.dt_txt;

      const date = timeDate.slice(0, 10);
      const time = timeDate.slice(11, 19);

      const icon = forecastItem.weather[0]?.icon ?? null;
      const temp = forecastItem.main.temp;

      list.push(
        <div key={i} className="flex flex-col items-center justify-center mr-3">
          <p className="font-light text-sm">{date}</p>
          <div>{time}</div>
          <img src={iconUrlFromCode(icon)} className="w-12 my-1" alt="" />
          <p className="font-medium">{`${temp.toFixed()}°`}</p>
        </div>
      );
    }
    return list;
  }

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white overflow-auto ">{ListForecast()}</div>
    </div>
  );
}

export default Forecast;