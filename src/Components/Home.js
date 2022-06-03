import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const removeDuplicates = (data) => {
    return data.filter((value, index) => data.indexOf(value) === index);
  };

  const handleCart = (headphone) => {
    if (cart.length < 4) {
      const newCart = removeDuplicates([...cart, headphone]);
      setCart(newCart);
    } else {
      console.log("Nothing");
    }
  };

  const clearCart = () => {
    const clearCart = [];
    setCart(clearCart);
  };

  return (
    <div className="container mx-auto my-24">
      <h1 className="text-orange-500 text-4xl text-center font-bold ">
        Our Products
      </h1>
      <div className="flex items-center justify-center mt-10">
        <input
          className="border border-orange-500 w-[500px] p-2"
          type="text"
          name="text"
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="flex my-10 gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
          {products
            .filter((product) => {
              if (product === "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <Product
                key={product._id}
                product={product}
                handleCart={handleCart}
              ></Product>
            ))}
        </div>
        <div className="my-10">
          <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body h-full">
              <h2 class="text-orange-500 text-center font-bold text-2xl">
                Cart
              </h2>
              <p>
                {cart.map((product) => (
                  <div className="cart-item" key={product._id}>
                    <img src={product.image} alt="" />
                    <h1 className="font-bold text-orange-500 mt-2 text-xl">
                      {" "}
                      {product.name}{" "}
                    </h1>
                    <p>Price:{product.price}INR</p>
                  </div>
                ))}
              </p>
              <button
                className="text-white font-bold  ml-2 bg-orange-500 border border-orange-500 hover:bg-transparent hover:border-orange-500 text-lg hover:text-orange-500  "
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
