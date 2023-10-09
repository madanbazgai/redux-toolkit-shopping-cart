import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  let total = 0;
  let discount = 0;

  cartItems.forEach(({ totalPrice, discountPercentage }) => {
    discount += (totalPrice * discountPercentage) / 100;

    total += totalPrice;
  });
  return (
    <>
      <Link to="/">Go back</Link>
      <div className="cart-container">
        <h2>Your Cart</h2>

        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            quantity={item.quantity}
            id={item.id}
            price={item.price}
            title={item.title}
            thumbnail={item.thumbnail}
            total={item.totalPrice}
            discountPercentage={item.discountPercentage}
          />
        ))}
        <div className="price_container">
          <h1>Total Price: Rs. {total} /-</h1>
          <h1>Discount: Rs.{Math.ceil(discount)} </h1>
          <h1>Final Price: Rs{Math.ceil(total - discount)} </h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
