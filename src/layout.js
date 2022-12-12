import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeHover, setActiveHover] = useState("");

  const handleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleHover = (tab) => {
    setActiveHover(tab);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand me-12" to="/">
            Bank App
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className={
                    activeTab === "home" ? "nav-link active" : "nav-link"
                  }
                  to="/"
                  onClick={() => handleTab("home")}
                >
                  Home
                </Link>
                <div className="text-center dropdown-menu">
                  <span>Home Page</span>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={
                    activeTab === "create" ? "nav-link active" : "nav-link"
                  }
                  to="/create-account"
                  onClick={() => handleTab("create")}
                >
                  Create Account
                </Link>
                <div className="text-center dropdown-menu">
                  <span>This is all data Page</span>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={
                    activeTab === "deposit" ? "nav-link active" : "nav-link"
                  }
                  to="/deposit"
                  onClick={() => handleTab("deposit")}
                >
                  Deposit
                </Link>
                <div className="text-center dropdown-menu">
                  <span>This is all data Page</span>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={
                    activeTab === "withdraw" ? "nav-link active" : "nav-link"
                  }
                  to="/withdraw"
                  onClick={() => handleTab("withdraw")}
                >
                  Withdraw
                </Link>
                <div className="text-center dropdown-menu">
                  <span>This is all data Page</span>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={
                    activeTab === "all-data" ? "nav-link active " : "nav-link"
                  }
                  to="/all-data"
                  onClick={() => handleTab("all-data")}
                >
                  All Data
                </Link>

                <div className="text-center dropdown-menu">
                  <span>This is all data Page</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
