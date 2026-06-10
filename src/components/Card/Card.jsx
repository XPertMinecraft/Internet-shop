import './Card.css';
import { Link } from "react-router-dom";

export default function Card({ product, addToCart }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={product.Картинка} alt={product.Название} />
      </div>
      <h3>{product.Название}</h3>
      <p>
        <b>Ціна:</b> {product.Цена} грн
      </p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
      <Link to={`/product/${product.Id}`}>
        Детальніше →
      </Link>
    </div>
  )
}