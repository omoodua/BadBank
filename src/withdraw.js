import React, { useContext, useState } from "react";
import { GlobalContext } from "./context/global";

function Withdraw() {
  const { withdraw, balance } = useContext(GlobalContext);
  const [inputValue, setInputValue] = useState(0);
  const [successfullyWithdrawn, setSuccessfullyWithdrawn] = useState(false);
  const [errors, setErrors] = useState("");

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (balance > inputValue) setSuccessfullyWithdrawn(true);
    withdraw(inputValue);
  };
  const handleChange = (e) => {
    let value = Number(e.target.value);

    setErrors("");
    setSuccessfullyWithdrawn(false);

    if (isNaN(value)) {
      setErrors("Only Numbers are allowed");
    } else if (balance < value) {
      setErrors("Overdraft is not allowed");
    } else {
      setInputValue(value);
    }
  };
  return (
    <div className="card  w-50 p-3 m-auto">
      <h4>Balance {balance}</h4>
      {successfullyWithdrawn && (
        <div className="alert alert-success" role="alert">
          You have Successfully Withdrawn {inputValue}
        </div>
      )}
      {errors !== "" && (
        <div className="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="mb-3">
        <label className="form-label" htmlFor="inputDeposit">
          Withdraw
        </label>
        <input
          type="text"
          className="form-control"
          id="inputDeposit"
          value={inputValue}
          onChange={handleChange}
          // placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleWithdraw}
        disabled={inputValue === 0 || errors !== "" ? true : false}
      >
        Withdraw
      </button>
    </div>
  );
}

export default Withdraw;
