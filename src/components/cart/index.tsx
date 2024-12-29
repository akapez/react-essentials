import { FC } from "react";
import { CartContainer, CartIconWrapper, CartInfoContainer, CartInfoText } from "./style";
import { useCart } from "../../hooks/useCart";

export const Cart: FC = () => {
  const { totalItems, totalPrice } = useCart();

  return (
    <CartContainer>
      <CartInfoContainer>
        <CartInfoText>Total Items: {totalItems}</CartInfoText>
        <CartInfoText>Total Price: ${totalPrice.toFixed(2)}</CartInfoText>
      </CartInfoContainer>
    </CartContainer>
  );
};
