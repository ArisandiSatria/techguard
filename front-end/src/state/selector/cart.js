import { selector } from "recoil";
import { cartState } from "../atom/cartState";

export const cart = selector({
  key: "cart", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const cart = get(cartState);

    return cart;
  },
});
