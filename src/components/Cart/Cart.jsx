import './Cart.css';
import Order from '../Order/Order';

export default function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.Цена, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Кошик</h1>

      {cart.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.Id} style={{
              borderBottom: "1px solid #ccc",
              marginBottom: "10px",
              paddingBottom: "10px"
            }}>
              <h3>{item.Название}</h3>
              <p>{item.Цена} грн</p>
              <button onClick={() => removeFromCart(item.Id)}>
                Видалити
              </button>
            </div>
          ))}

          <h2>Сума: {totalPrice} грн</h2>

          <Order />
        </>
      )}
    </div>
  );
}