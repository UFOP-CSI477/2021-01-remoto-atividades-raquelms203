import Axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import "./styles.css";
export default function Converter() {
  const [firstCurrency, setFirstCurrency] = useState("AED");
  const [secondCurrency, setSecondCurrency] = useState("AED");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [listCurrencies, setListCurrencies] = useState([]);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
  });

  const fetchCurrencies = useCallback(() => {
    const url = `https://free.currconv.com/api/v7/currencies?apiKey=862312bf9331b53cb156`;
    Axios.get(url).then((response) => {
      let list = Object.entries(response.data.results);
      list = list.map((item) => item[0]).sort();
      console.log(list);
      setListCurrencies(list);
    });
  }, [setListCurrencies]);
  function converterValues() {
    let currencies = `${firstCurrency}_${secondCurrency}`;
    const url = `https://free.currconv.com/api/v7/convert?apiKey=862312bf9331b53cb156&q=${currencies}&compact=y`;

    Axios.get(url).then((response) => {
      let value = response.data[currencies]?.val;
      setSecondValue((parseFloat(firstValue) * value).toFixed(2));
    });
  }

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  return (
    <div className="column">
      <span>Escolha as moedas para conversão</span>
      <div className="row">
        <select
          value={firstCurrency}
          onChange={(e) => {
            setFirstCurrency(e.target.value);
          }}
        >
          {listCurrencies != null &&
            listCurrencies.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
        </select>
        <div>para</div>
        <select
          value={secondCurrency}
          onChange={(e) => {
            setSecondCurrency(e.target.value);
          }}
        >
          {listCurrencies != null &&
            listCurrencies.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
        </select>
      </div>
      <span>Digite o valor</span>
      <CurrencyInput
        allowNegativeValue={false}
        decimalsLimit={2}
        onValueChange={(value, name) => setFirstValue(value)}
      />
      <button onClick={converterValues}>Converter</button>
      <div style={{ fontWeight: "bold", fontSize: 16 }}>
        Resultado: {formatter.format(secondValue).substring(2)}
      </div>
    </div>
  );
}
