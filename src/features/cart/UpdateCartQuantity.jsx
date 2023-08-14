import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseCartQuantity, increaseCartQuantity } from "./cartSlice";

export default function UpdateCartQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1.5 items-center">
      <Button
        type="round"
        onClick={() => dispatch(decreaseCartQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="font-semibold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => {
          console.log(1);
          dispatch(increaseCartQuantity(pizzaId));
        }}
      >
        +
      </Button>
    </div>
  );
}
