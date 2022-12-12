import { createContext, useState } from "react";

const GlobalContext = createContext({
  balance: 0,
});

function GlobalProvider({ children }) {
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState(null);

  const deposit = (amount) => {
    setBalance(balance + amount);
  };
  const withdraw = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        balance,
        deposit,
        user,
        setUser,
        withdraw,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
