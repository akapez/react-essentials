import { useSelector, useDispatch } from "react-redux";
import { selectTotalItems, selectCartTotalPrice } from "../redux/selectors/cartSelector";
import { addItem, CartItem, removeItem } from "../redux/reducers/cartReducer";

export const useCart = () => {
  const dispatch = useDispatch();

  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const addProductToCart = (product: CartItem) => {
    dispatch(addItem(product));
  };

  const removeProductFromCart = (productId: number) => {
    dispatch(removeItem(productId));
  };

  return {
    totalItems,
    totalPrice,
    addProductToCart,
    removeProductFromCart,
  };
};
