import React, {useState} from "react";
import Table from "./Table";

function Main() {
    const [exchangeInputValue, setExchangeInputValue] = useState("");
    const [exchangeAmount, setExchangeAmount] = useState(0);
    const [error, setError] = useState("");

    const userBalance = 17042.67;

    const onAmountToExchangeChange = (event) => {
        const inputValue = event.target.value;
        setExchangeInputValue(inputValue);

        if (inputValue === "") {
            setExchangeAmount(0);
            setError("Amount cannot be empty");
            return;
        }

        const amountToExchange = parseFloat(inputValue);

        if (isNaN(amountToExchange)) {
            setExchangeAmount(0);
            setError("Amount cannot be empty");
            return;
        }

        if (amountToExchange < 0.01) {
            setExchangeAmount(NaN);
            setError("Amount cannot be less than $0.01");
            return;
        }

        if (amountToExchange > userBalance) {
            setExchangeAmount(NaN);
            setError("Amount cannot exceed the available balance");
            return;
        }

        setExchangeAmount(amountToExchange);
        setError("");
    }

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
            <label>
                I want to exchange $
                <input
                    className="w-10"
                    data-testid="amount-input"
                    required
                    type="number"
                    placeholder="USD"
                    value={exchangeInputValue}
                    onChange={onAmountToExchangeChange}
                    step="0.01"/>
                of my $ <span>{userBalance}</span>:
            </label>
            { error &&
                <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">
                    {error}
                </p>
            }
        </div>
      </section>
      <Table exchangeAmount={exchangeAmount} />
    </div>
  );
}

export default Main;
