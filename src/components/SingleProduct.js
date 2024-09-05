import { useCart } from "../Context.js"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./styles.css";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useCart(); 

  const isInCart = cart.some((item) => item.id === prod.id);

  const handleAddToCart = () => setCart([...cart, prod]);
  const handleRemoveFromCart = () => setCart(cart.filter((item) => item.id !== prod.id));

  return (
    <div className="card mb-4" style={{ maxWidth: "18rem" }}>
      <img src={prod.image} alt={prod.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{prod.name}</h5>
        <p className="card-text">Price: ₹ {prod.price}</p>
        {isInCart ? (
          <button className="btn btn-danger" onClick={handleRemoveFromCart}>
            Remove from Cart
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
