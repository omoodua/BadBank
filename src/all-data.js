import React, { useContext } from "react";
import { GlobalContext } from "./context/global";

function AllData() {
  const { balance, user } = useContext(GlobalContext);

  return (
    <div className="card  w-50 p-3 m-auto">
      <div className="card-body">
        <h5 className="card-title">All Data</h5>
        <p className="card-text">Name: {user && user.name}</p>
        <p className="card-text">Email: {user && user.email}</p>
        <p className="card-text">Email: {user && user.password}</p>
        <p className="card-text">Balance: {balance}</p>
      </div>
    </div>
  );
}

export default AllData;
