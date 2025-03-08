import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ exchangeAmount }) {
  const calculateCoinQuantity  = (exchangeRate) => {
    if (isNaN(exchangeAmount)) {
      return "n/a";
    }

    return (exchangeAmount * exchangeRate).toFixed(8)
  }

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
        {cryptocurrencyList.map((cryptocurrency) => (
          <tr key={cryptocurrency.code}>
            <td>{ cryptocurrency.name }</td>
            <td>1 USD = {cryptocurrency.rate}</td>
            <td>{calculateCoinQuantity(cryptocurrency.rate)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
