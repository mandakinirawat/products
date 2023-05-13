import { useReducer } from "react";
import Products from "./Pages/Products";

function App() {
  const initialState = {
    products: [
      { id: "1", productName: "Apple", quantity: "100" },
      { id: "2", productName: "Mango", quantity: "200" },
    ],
    product: { id: "", productName: "", quantity: "" },
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE": {
        const index = state.products.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index >= 0) {
          state.products[index] = state.product;
          return {
            ...state,
            products: [...state.products],
            product: { id: "", productName: "", quantity: "" },
          };
        }
        return {
          ...state,
          products: [
            ...state.products,
            { ...state.product, id: state.products.length + 1 },
          ],
          product: { id: "", productName: "", quantity: "" },
        };
      }
      case "DELETE":
        return { ...state, products: action.payload };
      case "SET_PRODUCT":
        return {
          ...state,
          product: action.payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.toUpperCase();
    dispatch({
      type: "SET_PRODUCT",
      payload: { ...state.product, [name]: value },
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE", payload: state.product });
  };

  const handleEditDelete = (e) => {
    if (e.target.name === "edit") {
      const editItem = state.products.find((item) => item.id === e.target.id);

      if (editItem) dispatch({ type: "SET_PRODUCT", payload: editItem });
    }
    if (e.target.name === "delete") {
      const index = state.products.findIndex((item) => item.id === e.target.id);
      if (index >= 0) {
        state.products.splice(index, 1);
        dispatch({ type: "DELETE", payload: [...state.products] });
      }
    }
  };

  return (
    <div className="App">
      <Products
        products={state.products}
        product={state.product}
        handleEditDelete={handleEditDelete}
        handleChange={handleChange}
        handleSave={handleSave}
      />
    </div>
  );
}

export default App;
