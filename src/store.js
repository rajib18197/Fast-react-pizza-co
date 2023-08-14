import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import menuReducer from "./features/menu/filterMenuSlice";

const store = configureStore({
  reducer: {
    filterMenu: menuReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

// const data = {
//   id: 1,
//   imageUrl: "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
//   ingredients: ["tomato", "mozzarella", "basil"],
//   name: "Margherita",
//   soldOut: false,
//   unitPrice: 12,
// }
