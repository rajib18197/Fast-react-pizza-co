import { useDispatch } from "react-redux";
import { removeCart } from "./cartSlice";
import Button from "../../ui/Button";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(removeCart(pizzaId))}>
      Remove
    </Button>
  );
}
