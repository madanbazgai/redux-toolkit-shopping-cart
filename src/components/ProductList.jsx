import React from "react";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductList = ({
  id,
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      id,
      title,
      price,
      description,
      thumbnail,
      discountPercentage,
     
    };
    dispatch(addToCart(newItem));
  };
  return (
    <div className="productList">
      <img src={thumbnail} alt="" />
      <h3>{title}</h3>
      <p>Rs: {price} /-</p>
      <p>{description.substring(0, 50)}...</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductList;
