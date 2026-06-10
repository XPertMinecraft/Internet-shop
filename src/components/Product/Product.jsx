import './Product.css'
import { useParams, Link } from "react-router-dom"
import { CustomHook } from '../CustomHook/CustomHook';

export default function Product({addToCart}) {
  const { id } = useParams();
  const {sheetD} = CustomHook();
  const product = sheetD.find(p => p.Id === Number(id))

  if (!product) {
    return (
      <div className="product-page">
        <div className="not-found">
          <h2>❌ Товар не знайдено</h2>
          <Link to="/">Повернутися до магазину</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="product-page">
      <div className="product-container">
        <Link to="/" className="back-link">
          ← Назад до списку товарів
        </Link>
        
        <div className="product-content">
          <div className="product-image">
            <div className="image-decoration"></div>
            <img src={product.Картинка} alt={product.Название} />
          </div>
          
          <div className="product-info">
            <h1>{product.Название}</h1>
            
            <div className="price-block">
              <span className="price-label">Ціна</span>
              <div className="price-value">
                {product.Цена} 
                <span className="price-currency">грн</span>
              </div>
            </div>
            
            <div className="description-block">
              <span className="description-label">Опис</span>
              <div className="description-text">
                {product.Описание || "Опис товару відсутній"}
              </div>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart" onClick={()=>addToCart(product)}>
                🛒 Додати до кошика
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}