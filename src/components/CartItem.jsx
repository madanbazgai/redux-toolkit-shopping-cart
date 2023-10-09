import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import "./CartItem.css";
const CartItem = ({
  title,
  thumbnail,
  quantity,
  total,
  price,
  id,
  discountPercentage,
}) => {
  const discountPercentageCeil = Math.ceil(discountPercentage);
  const discountAmount = Math.ceil(total * (discountPercentage / 100));
  const totalPrice = price * quantity;
  const finalPrice = totalPrice - discountAmount;

  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      addToCart({
        title,
        thumbnail,
        quantity,
        total,
        price,
        id,
        discountPercentage,
      })
    );
  };

  const decrementItem = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="cartItem">
        <img src={thumbnail} alt="" />

        <div>
          <h4>Title</h4>
          <h4> {title}</h4>
        </div>

        <div>
          <h4>Price</h4>
          <p>Rs. {price} /-</p>
        </div>

        <div>
          <h4>Quantity</h4>
          <p>x{quantity}</p>
        </div>

        <div>
          <h4>Total Price</h4>
          <p>Total Rs. {totalPrice}</p>
        </div>

        <div>
          <h4>Discount Percentagte</h4>
          <p> {discountPercentageCeil}%</p>
        </div>

        <div>
          <h4>Discount Amount</h4>
          <p> Rs.{discountAmount}</p>
        </div>

        <div>
          <h4>Final Amount</h4>
          <p>Rs. {finalPrice}</p>
        </div>

        <div className="addRemoveButton">
          <button
            className="px-4 py-2 bg-slate-800 rounded"
            onClick={decrementItem}
          >
            -
          </button>
          <button
            className="px-4 py-2 bg-slate-800 rounded"
            onClick={incrementItem}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
