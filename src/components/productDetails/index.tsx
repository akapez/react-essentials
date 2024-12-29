import { FC } from "react";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";
import { addItem } from "../../redux/reducers/cartReducer";
import {
  ProductDetailsContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
} from "./style";

interface ProductDetailsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export const ProductDetails: FC<ProductDetailsProps> = ({
  id,
  title,
  price,
  description,
  image,
}) => {
  const { addProductToCart } = useCart();

  return (
    <ProductDetailsContainer>
      <ProductImage src={image} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>${price}</ProductPrice>
      <AddToCartButton onClick={() => addProductToCart({ id, price })}>Add to Cart</AddToCartButton>
    </ProductDetailsContainer>
  );
};
