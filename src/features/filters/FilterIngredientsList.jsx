import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import {
  addFilterIngredient,
  getfilterMenu,
  removeFilterIngredient,
} from "../menu/filterMenuSlice";

export default function FilterIngredientsList() {
  const menu = useLoaderData();
  const { filterIngredients } = useSelector(getfilterMenu);

  const dispatch = useDispatch();

  const allIngredients = menu
    .map((pizza) => pizza.ingredients)
    .flat()
    .reduce((acc, cur) => {
      if (acc.includes(cur)) {
        return acc;
      }

      return [...acc, cur];
    }, []);

  console.log(allIngredients);

  function handleClick(ing) {
    if (filterIngredients.includes(ing)) dispatch(removeFilterIngredient(ing));
    else dispatch(addFilterIngredient(ing));
  }

  return (
    <div className="p-4 bg-stone-800 rounded">
      <h2 className="font-semibold text-stone-200 text-center uppercase mb-4">
        Filtering by Ingredients
      </h2>
      <ul className="grid grid-cols-1 gap-2">
        {allIngredients.map((ing) => {
          return (
            <li
              key={ing}
              className={`flex items-center rounded px-2 py-2 cursor-pointer justify-center text-center hover:bg-yellow-200 ${
                filterIngredients.includes(ing)
                  ? "bg-yellow-200"
                  : "bg-yellow-400"
              }`}
              onClick={() => handleClick(ing)}
            >
              {ing}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
