import './Home.css'
import {CustomHook} from '../CustomHook/CustomHook'
import Card from "../Card/Card"

export default function Home({ addToCart }) {
  const {sheetD} = CustomHook();

  return (
    <div className="home-container">
      <h2>
        <span>🛍️</span> Магазин ігор
      </h2>
      <div className="products-grid">
        {sheetD.map((item, index) => (
          <Card key={index} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}