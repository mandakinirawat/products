import React from "react";

const ListProducts = ({ products, handleEditDelete }) => {
  return (
    <div>
      {products.length ? (
        <>
          {products.map((item, index) => (
            <div key={index} className="flex-row bg-white">
              <div>{item.productName}</div>
              <div>{item.quantity}</div>
              <button
                name="edit"
                id={item.id}
                className="button"
                onClick={handleEditDelete}
              >
                Edit
              </button>
              <button
              id={item.id}
                name="delete"
                className="button"
                onClick={handleEditDelete}
              >
                Delete
              </button>
            </div>
          ))}
        </>
      ) : (
        <p style={{color:"red",display:"flex",justifyContent:"center"}}>List is empty...</p>
      )}
    </div>
  );
};

export default ListProducts;
