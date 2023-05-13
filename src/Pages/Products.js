import React from "react";
import ErrorBoundary from "../Components/ErrorBoundary";
import SaveProduct from "../Components/SaveProduct";
import ListProducts from "../Components/ListProducts";

const Products = ({ products, product,handleEditDelete,handleChange,handleSave }) => {
 
  return (
    <main className="container">
      <header>PRODUCTS</header>
      <section className="flex-col">
        <ErrorBoundary>
          <SaveProduct product={product} handleChange={handleChange} handleSave={handleSave}/>
        </ErrorBoundary>
        <ErrorBoundary>
          <ListProducts products={products} handleEditDelete={handleEditDelete}/>
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default Products;
