import React, { useContext, useState } from "react";
import { GlobalContext } from "./context/global";

function Deposit() {
  const { deposit, balance } = useContext(GlobalContext);
  const [inputValue, setDepositValue] = useState(0);
  const [successfullyDeposited, setSuccessfullyDeposited] = useState(false);
  const [errors, setErrors] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();
    deposit(inputValue);
    setSuccessfullyDeposited(true);
  };

  const handleChange = (e) => {
    let value = Number(e.target.value);

    setErrors("");
    setSuccessfullyDeposited(false);

    if (isNaN(value)) {
      setErrors("Only Numbers are allowed");
    } else if (value < 0) {
      setErrors("Only Deposit Positive Values");
    } else {
      setDepositValue(value);
    }
  };

  return (
    <div className="card  w-50 p-3 m-auto">
      <h4>Balance ${balance}</h4>
      {successfullyDeposited && (
        <div className="alert alert-success" role="alert">
          You have Successfully Deposit {inputValue}
        </div>
      )}
      {errors !== "" && (
        <div className="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="mb-3">
        <label className="form-label" htmlFor="inputDeposit">
          Deposit
        </label>
        <input
          type="text"
          className="form-control"
          id="inputDeposit"
          // placeholder="Password"
          value={inputValue}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleDeposit}
        disabled={inputValue === 0 || errors !== "" ? true : false}
      >
        Deposit
      </button>
    </div>
  );
}

export default Deposit;
