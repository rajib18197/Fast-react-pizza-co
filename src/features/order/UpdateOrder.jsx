import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <input className="input w-full" type="tel" name="phone" required />{" "}
      <button>Make Priority</button>
    </fetcher.Form>
  );
}

export const action = async function ({ request, params }) {
  const phone = await request.formData();
  const data = Object.fromEntries(phone);
  console.log(data);
  const updateItem = { priority: true, phone };
  await updateOrder(params.orderId, updateItem);
  return null;
};
