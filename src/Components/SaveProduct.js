import React from "react";

const SaveProduct = ({ product, handleChange, handleSave }) => {
  const { productName, quantity } = product;
  const canSave = /[A-Za-z][\w.\s]/.test(productName) && /\d+$/.test(quantity);
  return (
    <>
      <div className="flex-row">
        <div className="flex-col">
          <label>Product</label>
          <input
            type="text"
            name="productName"
            autoComplete="off"
            pattern="[A-Za-z][\w.\s]"
            value={product?.productName ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className="flex-col">
          <label>Quantity</label>
          <input
            type="text"
            name="quantity"
            autoComplete="off"
            pattern="\d+$"
            value={product?.quantity ?? ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex-col">
        <button name="save" disabled={!canSave} onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};

export default SaveProduct;
