import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import Filters from "../filters/Filters";
import { useSelector } from "react-redux";
import { getfilterMenu } from "./filterMenuSlice";

function Menu() {
  const menu = useLoaderData();
  const { filterIngredients, filterPrice, filterSold } =
    useSelector(getfilterMenu);
  console.log(menu);
  console.log(filterIngredients, filterPrice, filterSold);

  let filterPizza = menu;

  if (filterIngredients.length !== 0) {
    filterPizza = filterPizza.filter((pizza) =>
      filterIngredients.some((ing) => pizza.ingredients.includes(ing))
    );
  }

  if (filterPrice !== null) {
    filterPizza = filterPizza.filter(
      (pizza) => pizza.unitPrice === filterPrice
    );
  }

  if (filterSold === "no soldout") {
    filterPizza = filterPizza.filter((pizza) => !pizza.soldOut);
  }

  if (filterSold === "soldout") {
    filterPizza = filterPizza.filter((pizza) => pizza.soldOut);
  }

  console.log(filterPizza);

  return (
    <div className="flex gap-3	">
      <Filters />
      <ul className="divide-y divide-stone-200 px-2 flex-1">
        <p className="font-semibold uppercase mb-2">
          pizza Menus ({filterPizza.length} out of {menu.length})
        </p>
        {filterPizza.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  console.log(menu);
  return menu;
}

export default Menu;
