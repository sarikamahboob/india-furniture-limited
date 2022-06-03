import React from "react";

const Product = ({ product, handleCart }) => {
  const { name, price, image } = product;
  return (
    <div className="flex items-center justify-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Price: {price} INR </p>
          <div class="card-actions justify-end">
            <button
              onClick={() => handleCart(product)}
              class="btn btn-orange-500 bg-orange-500 border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-orange-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
