import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AccountInfo } from "./components/AccountInfo/AccountInfo";
import { StockInfo } from "./components/StockInfo/StockInfo";

function App() {
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    fetch(
      "http://ec2-52-64-26-64.ap-southeast-2.compute.amazonaws.com:8080/account",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(res => setAccountInfo(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>Stock</div>
        <AccountInfo accountInfo={accountInfo} />
        <StockInfo accountInfo={accountInfo} />
      </header>
    </div>
  );
}

export default App;
