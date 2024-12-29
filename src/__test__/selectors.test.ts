import { selectTotalItems, selectCartTotalPrice } from "../redux/selectors/cartSelector";
import { selectAllProducts, selectExpensiveProducts } from "../redux/selectors/productSelector";
import { CartState } from "../redux/reducers/cartReducer";
import { RootState } from "../redux/store";
import { ProductState, Product } from "../redux/reducers/productReducer";

describe("Selectors", () => {
  it("should select total items in the cart - selectCartTotalItems", () => {
    const cartState: CartState = {
      items: [
        { id: 1, price: 100 },
        { id: 2, price: 200 },
      ],
      totalPrice: 300,
    };

    const mockState: RootState = {
      cart: cartState,
      product: {} as ProductState,
    };

    expect(selectTotalItems(mockState)).toEqual(2);
  });

  it("should select total price of the cart - selectCartTotalPrice", () => {
    const cartState: CartState = {
      items: [
        { id: 1, price: 100 },
        { id: 2, price: 200 },
      ],
      totalPrice: 300,
    };

    const mockState: RootState = {
      cart: cartState,
      product: {} as ProductState,
    };

    expect(selectCartTotalPrice(mockState)).toEqual(300);
  });

  it("should select all products from the store - selectAllProducts", () => {
    const products: Product[] = [
      { id: 1, title: "Product 1", price: 100, description: "", image: "", category: "" },
      { id: 2, title: "Product 2", price: 200, description: "", image: "", category: "" },
    ];

    const productState: ProductState = {
      products,
      status: "succeeded",
      error: null,
    };

    const mockState: RootState = {
      cart: {} as CartState,
      product: productState,
    };

    expect(selectAllProducts(mockState)).toEqual(products);
  });

  it("should select expensive products from the store - selectExpensiveProducts", () => {
    const products: Product[] = [
      { id: 1, title: "Product 1", price: 100, description: "", image: "", category: "" },
      { id: 2, title: "Product 2", price: 2000, description: "", image: "", category: "" },
    ];

    const productState: ProductState = {
      products,
      status: "succeeded",
      error: null,
    };

    const mockState: RootState = {
      cart: {} as CartState,
      product: productState,
    };

    const expensiveProducts = selectExpensiveProducts(mockState);

    expect(expensiveProducts.length).toEqual(1);
    expect(expensiveProducts[0]).toEqual(products[1]);
  });
});
