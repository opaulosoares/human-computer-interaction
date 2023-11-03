import { useContext } from "react";
import CartCtx, { CartCtxType } from "./cart-context";

export default function useCart(): CartCtxType {
  return useContext(CartCtx);
}
