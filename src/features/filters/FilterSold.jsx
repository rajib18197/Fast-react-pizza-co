import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getfilterMenu, sold } from "../menu/filterMenuSlice";

export default function FilterSold() {
  const dispatch = useDispatch();
  const { filterSold } = useSelector(getfilterMenu);

  return (
    <div className="p-4 bg-stone-800 rounded">
      <h2 className="text-stone-200 font-semibold uppercase mb-4">
        Filtering By Sold
      </h2>
      <div className="flex gap-2 flex-wrap">
        <Button
          type="small"
          activeClass={filterSold === "no soldout" ? "active" : ""}
          onClick={() => dispatch(sold("no soldout"))}
        >
          Available Pizza
        </Button>
        <Button
          type="small"
          activeClass={filterSold === "soldout" ? "active" : ""}
          onClick={() => dispatch(sold("soldout"))}
        >
          Soldout
        </Button>
        <Button
          type="small"
          activeClass={filterSold === null ? "active" : ""}
          onClick={() => dispatch(sold(null))}
        >
          All type
        </Button>
      </div>
    </div>
  );
}
