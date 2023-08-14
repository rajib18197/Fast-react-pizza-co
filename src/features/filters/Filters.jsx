import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import FilterIngredientsList from "./FilterIngredientsList";
import FilterPrice from "./FilterPrice";
import FilterSold from "./FilterSold";
import { resetFilter } from "../menu/filterMenuSlice";

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 flex-[.3] sticky overflow-y-scroll h-screen top-0 self-start bg-stone-900 px-4 py-3">
      <FilterIngredientsList />
      <FilterPrice />
      <FilterSold />
      <div className="mt-4 text-right">
        <Button type="primary" onClick={() => dispatch(resetFilter())}>
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
