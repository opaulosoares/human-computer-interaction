import { useState } from "react";
import CartCtx, { CartCtxType } from "./cart-context";
import { Product } from "../../models/product";

const CartProvider: React.FC<any> = ({ children }) => {
  const [cart, setCart] = useState<CartCtxType["cart"]>({});

  const addToCard = (product: Product): void => {
    setCart((prev) => {
      if (product.nome in cart) {
        return {
          ...prev,
          [product.nome]: { ...product, qty: cart[product.nome].qty + 1 },
        };
      }

      return { ...prev, [product.nome]: { ...product, qty: 1 } };
    });
  };

  return (
    <CartCtx.Provider value={{ cart: cart, addToCard }}>
      {children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
