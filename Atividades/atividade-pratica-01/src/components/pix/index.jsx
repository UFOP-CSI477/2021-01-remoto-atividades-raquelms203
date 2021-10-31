import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";
import CurrencyInput from "react-currency-input-field";
import Axios from "axios";

export default function Pix() {
  const [amount, setAmount] = useState(100);
  const [value, setValue] = useState(0.0);
  const [isReceivement, setIsReceivement] = useState(true);
  const [openExtract, setOpenExtract] = useState(false);
  const [keyPix, setKeyPix] = useState(1);
  const [valueKey, setValueKey] = useState("");
  const [valueBank, setValueBank] = useState("");
  const [banks, setBanks] = useState([]);
  const [listOperations, setListOperations] = useState([]);

  const keyTypes = ["CPF", "CNPJ", "E-mail", "Celular", "Chave aleatória"];

  const fetchBanks = useCallback(() => {
    Axios.get("https://brasilapi.com.br/api/banks/v1").then((response) => {
      setBanks(response.data);
    });
  }, [setBanks]);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function componentPayment() {
    return (
      <div className="column">
        <div>Escolha o tipo da chave</div>
        <select
          value={keyPix}
          onChange={(e) => {
            setKeyPix(e.target.value);
          }}
        >
          {keyTypes.map((item, index) => (
            <option value={index}>{item}</option>
          ))}
        </select>
        <span>Digite a chave</span>
        <input onChange={(e) => setValueKey(e.target.value)} />
        <span>Selecione o banco</span>
        <select
          value={valueBank}
          onChange={(e) => {
            setValueBank(e.target.value);
          }}
        >
          {banks.map((item, index) => (
            <option value={index}>{item.name}</option>
          ))}
        </select>
        <div>Saldo após: {formatter.format(amount - value)}</div>
        <button
          style={{ height: 32 }}
          onClick={() => {
            if (valueKey === "") alert("Insira uma chave");
            else {
              setAmount(amount - value);
              setListOperations([
                ...listOperations,
                "Pagamento: " + valueKey + " | - " + formatter.format(value),
              ]);
              setValue(0.0);
            }
          }}
        >
          Confirmar
        </button>
      </div>
    );
  }

  function componentSelected() {
    let balance = Number.parseFloat(amount) + Number.parseFloat(value);
    if (isReceivement)
      return (
        <div className="column">
          <QRCode value={value} />
          <div>{formatter.format(value)}</div>
          <div>Saldo após: {formatter.format(balance)}</div>
          <button
            style={{ height: 32 }}
            onClick={() => {
              setAmount(balance);
              setListOperations([
                ...listOperations,
                "Recebimento: | + " + formatter.format(value),
              ]);
              setValue(0.0);
            }}
          >
            Confirmar
          </button>
        </div>
      );
    else return componentPayment();
  }

  useEffect(() => {
    fetchBanks();
  }, [fetchBanks]);

  return (
    <div className="column">
      <div>
        Saldo atual: {formatter.format(amount)}
        <button
          style={{ marginLeft: 6 }}
          onClick={() => setOpenExtract(!openExtract)}
        >
          {openExtract ? "Fechar extrato" : "Ver extrato"}
        </button>
      </div>
      {!openExtract ? (
        <div className="column">
          <div className="money-input">
            <span>Valor para transferência: R$</span>
            <CurrencyInput
              allowNegativeValue={false}
              defaultValue={value}
              decimalsLimit={2}
              onValueChange={(value, name) => setValue(value)}
            />
          </div>
          {value > 0 && (
            <>
              <div>
                <input
                  type="radio"
                  value={1}
                  checked={isReceivement}
                  onChange={() => setIsReceivement(!isReceivement)}
                />
                Recebimento
              </div>
              <div>
                <input
                  type="radio"
                  value={2}
                  checked={!isReceivement}
                  onChange={() => setIsReceivement(!isReceivement)}
                />
                Pagamento
              </div>
              {componentSelected()}
            </>
          )}
        </div>
      ) : listOperations.length > 0 ? (
        listOperations.map((item) => (
          <div
            style={{
              color: item.includes("Pagamento") ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            {item}
          </div>
        ))
      ) : (
        <div>Não há transações</div>
      )}
    </div>
  );
}
