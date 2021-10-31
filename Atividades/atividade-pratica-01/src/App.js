import { useState } from "react";
import Calc from "./components/calc";
import Converter from "./components/converter";
import Pix from "./components/pix";
import "./styles.css";

function App() {
  const [indexSelected, setIndexSelected] = useState(1);

  function componentSelected() {
    switch (indexSelected) {
      case 1:
        return <Calc />;
      case 2:
        return <Pix />;
      case 3: return <Converter />
      default:
        return <div />;
    }
  }

  return (
    <div className="App">
      <div className="menu">
        <button className="menu-button" onClick={() => setIndexSelected(1)}>
          Calculadora
        </button>
        <button className="menu-button" onClick={() => setIndexSelected(2)}>
          PIX
        </button>
        <button className="menu-button" onClick={() => setIndexSelected(3)}>
          Conversor de moeda
        </button>
      </div>
      <div style={{ marginTop: 30 }}> {componentSelected()}</div>
    </div>
  );
}

export default App;
