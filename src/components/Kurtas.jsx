import { kurtis } from "../data/db.json";
import { Link } from "react-router-dom";
export const Kurtas = () => {
  return (
    <div id="kurtas">
      <h1 className="head">Kurtas</h1>
      <div className="cardone main-Content">
        {kurtis.map((product) => (
          <div className="inner CC">
            <Link
              to={`/product/${parseInt(product.id)}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="content">
                <img src={product.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title" style={{ textAlign: "start" }}>
                    {product.title}
                  </h4>
                  <p className="brand-name">{product.description}</p>
                  <h6 className="brand-name">Rs. {product.price}</h6>
                  
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
