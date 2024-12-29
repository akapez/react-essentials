import { FC } from "react";
import { Cart } from "./components/cart";
import { ProductList } from "./components/productList";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App: FC = () => {
  return (
    <AppContainer>
      <h1>SHOPPING CART</h1>
      <ProductList />
      <Cart />
    </AppContainer>
  );
};

export default App;
