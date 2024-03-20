import "./App.css";

function App() {
  return (
    <>
      <div>
        <button>Sign Out</button>

        <h2>My Restuarant</h2>
      </div>

      {/* Ruler */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Food food={"Rice and stew"} />
        <Food food={"Yam and egg"} />
        <Food food={"Bacon and eggs"} />
        <Food food={"Bole and sauce"} />
      </div>

      <div>
        <button>Shopping Cart</button>
        <button>Check out</button>
      </div>
    </>
  );
}

export default App;

function Food({ food }) {
  return (
    <div style={{ margin: "6px" }}>
      <img></img>
      <h3>{food}</h3>
      <p>Buy our delicious {food}</p>
      <h4>${33.4}</h4>
    </div>
  );
}
