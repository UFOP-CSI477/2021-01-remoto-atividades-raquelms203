import { useState } from "react";
import "./styles.css";
export default function Calc() {
  const [inputValue, setInputValue] = useState("");
  const [inputResult, setInputResult] = useState("");
  const [operator, setOperator] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  function addNumber(number) {
    let value;
    if (operator === "") {
      if (firstNumber !== "") {
        value = String(firstNumber + number);
      } else {
        value = String(number);
      }
      setFirstNumber(value);
      setInputValue(value);
    } else {
      if (secondNumber !== "") {
        value = String(secondNumber + number);
      } else {
        value = String(number);
      }
      setSecondNumber(value);
      setInputValue(firstNumber + operator + value);
    }
  }

  function addOperator(op) {
    setOperator(op);
    setInputValue(firstNumber + op);
  }

  function clearValues() {
    setInputResult("");
    setOperator("");
    setInputValue("");
    setFirstNumber("");
    setSecondNumber("");
  }

  function handleCalc() {
    let result = 0;
    switch (operator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;
      case "/":
        result = Number(firstNumber) / Number(secondNumber);
        break;
      default:
        result = 0;
    }
    setInputResult(String(result));
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="row">
              <button onClick={() => addNumber(7)} className="button-calc">
                7
              </button>
              <button onClick={() => addNumber(8)} className="button-calc">
                8
              </button>
              <button onClick={() => addNumber(9)} className="button-calc">
                9
              </button>
            </div>
            <div className="row">
              <button onClick={() => addNumber(4)} className="button-calc">
                4
              </button>
              <button onClick={() => addNumber(5)} className="button-calc">
                5
              </button>
              <button onClick={() => addNumber(6)} className="button-calc">
                6
              </button>
            </div>
            <div className="row">
              <button onClick={() => addNumber(1)} className="button-calc">
                1
              </button>
              <button onClick={() => addNumber(2)} className="button-calc">
                2
              </button>
              <button onClick={() => addNumber(3)} className="button-calc">
                3
              </button>
            </div>
            <div className="row">
              <button onClick={() => addNumber(0)} className="button-calc">
                0
              </button>
            </div>
          </div>
          <div className="column">
            <div>
              <button onClick={() => addOperator("+")} className="button-op">
                +
              </button>
            </div>
            <div>
              <button onClick={() => addOperator("-")} className="button-op">
                -
              </button>
            </div>
            <div>
              <button onClick={() => addOperator("*")} className="button-op">
                *
              </button>
            </div>
            <div>
              <button onClick={() => addOperator("/")} className="button-op">
                /
              </button>
            </div>
          </div>
        </div>
        <div className="column-result">
          <div className="row">
            <div className="column">
              <input type="text" value={inputValue} readOnly />
              <button
                onClick={handleCalc}
                className="button-op"
                style={{ height: 30, margin: "5px auto" }}
              >
                =
              </button>
              <input type="text" value={inputResult} readOnly />
            </div>
            <button style={{ marginLeft: 22 }} onClick={clearValues}>
              Limpar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
