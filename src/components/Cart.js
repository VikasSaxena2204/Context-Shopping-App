import { useCart } from "../Context.js"; 
import SingleProduct from "./SingleProduct.js";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./styles.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cart } = useCart(); 
  const [total, setTotal] = useState(0); 

  useEffect(() => {
    if (cart.length > 0) {
      const totalAmount = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
      setTotal(totalAmount);
    } else {
      setTotal(0); 
    }
  }, [cart]);

  const handleCheckout = () => {
    alert(`Checkout - Total: ₹ ${total.toFixed(2)}`);
    // Here you can also navigate to a checkout page or handle further checkout logic
  };

  return (
    <div className="container text-center my-4">
      <h1 className="mb-4">My Cart</h1>
      <h2 className="mb-4">Total: ₹ {total.toFixed(2)}</h2> {/* Format total to 2 decimal places */}
      <div className="row">
        {cart.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <SingleProduct prod={prod} />
          </div>
        ))}
      </div>

      {/* Checkout Button */}
      {cart.length > 0 && (
        <button className="btn btn-primary mt-4" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
