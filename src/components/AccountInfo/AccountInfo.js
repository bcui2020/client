import React, { useState } from "react";
import CurrencyInput from "react-currency-input";
//1.format

const OPERATION_TYPE = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW"
};
const AccountInfo = ({ accountInfo }) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(OPERATION_TYPE.DEPOSIT);

  const onSubmit = () => {
    setAmount(0);
    console.log(amount, type);
  };

  const onAmountChange = (event, maskedvalue, floatvalue) => {
    setAmount(floatvalue);
  };

  return (
    <div>
      <div>
        <span>Account Cash Blance:</span>
        <span>{accountInfo.balance}</span>
      </div>
      <div>
        <div>
          <input
            type="radio"
            name="type"
            checked={type === OPERATION_TYPE.DEPOSIT}
            onChange={() => setType(OPERATION_TYPE.DEPOSIT)}
          />
          Deposit
          <input
            type="radio"
            name="type"
            checked={type === OPERATION_TYPE.WITHDRAW}
            onChange={() => setType(OPERATION_TYPE.WITHDRAW)}
          />
          Withdraw
        </div>
        Amount:{" "}
        <CurrencyInput
          prefix="$"
          value={amount}
          onChangeEvent={onAmountChange}
        />
        <div>
          <button onClick={onSubmit} disabled={amount === 0}>
            Submit
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export { AccountInfo };
