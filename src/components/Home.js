import { useCart } from "../Context.js"; 
import SingleProduct from "./SingleProduct.js";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./styles.css";

const Home = () => {
  const { products } = useCart(); 

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Product Page</h1>
      <div className="row">
        {products.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <SingleProduct prod={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
