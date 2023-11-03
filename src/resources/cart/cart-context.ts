import { createContext } from "react";
import { CartProduct, Product } from "../../models/product";

export interface CartCtxType {
  cart: Record<string, CartProduct>;
	addToCard: (product: Product) => void;
}

const CartCtx = createContext<CartCtxType>(null as unknown as CartCtxType);

export default CartCtx;
