import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addFilterPrice } from "../menu/filterMenuSlice";
import Button from "../../ui/Button";

export default function FilterPrice() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const menu = useLoaderData();
  const pricesList = menu.map((pizza) => pizza.unitPrice);
  console.log(pricesList);
  const minPrice = pricesList.reduce((acc, cur) => {
    if (cur.unitPrice < acc) return cur.unitPrice;
    return acc;
  }, pricesList[0]);

  const maxPrice = menu.reduce((acc, cur) => {
    if (cur.unitPrice > acc) return cur.unitPrice;
    return acc;
  }, pricesList[0]);
  console.log(minPrice, maxPrice);
  return (
    <div className="p-4 bg-stone-800 rounded">
      <h2 className="font-semibold text-stone-200 uppercase mb-3">
        Filtering by Price
      </h2>
      <div>
        <p className="font-semibold text-stone-300 mb-2">
          Up to ({minPrice} - {maxPrice})€
        </p>
      </div>
      <div className="flex justify-between">
        <input
          type="range"
          className="range w-4/5 bg-stone-700 appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[12px] [&::-webkit-slider-thumb]:w-[12px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
          name="price-range"
          min={minPrice}
          max={maxPrice}
          step={1}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            dispatch(addFilterPrice(e.target.value));
          }}
        />
        <p className="font-semibold text-lg text-stone-200">
          {value === 0 ? "" : value}
        </p>
      </div>

      <div className="flex justify-end items-center mt-3">
        <Button
          type="small"
          onClick={() => {
            setValue(0);
            dispatch(addFilterPrice(null));
          }}
        >
          reset price
        </Button>
      </div>
    </div>
  );
}
