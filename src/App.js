import { Route, Routes } from "react-router-dom";
import AllData from "./all-data";
import CreateAccount from "./create-account";
import Deposit from "./deposit";
import Home from "./home";
import Layout from "./layout";
import NoMatch from "./no-match";
import Withdraw from "./withdraw";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="all-data" element={<AllData />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
