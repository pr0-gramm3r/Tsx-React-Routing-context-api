import { useCart } from "../context/Provider";

const Cart = () => {

  const {cart_no} = useCart();

  return (
    <div className="cart">
      <i className="fas fa-shopping-cart"></i>
      <p>{cart_no}</p>
    </div>
  )
}

export default Cart
