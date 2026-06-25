import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Milk", price: 50 },
    { id: 2, name: "Curd", price: 40 },
    { id: 3, name: "Butter", price: 60 },
    { id: 4, name: "Paneer", price: 120 }
  ];

  return (
    <div className="container">
      <h1>Milk Products Store</h1>

      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.name}</h2>
            <p>₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;