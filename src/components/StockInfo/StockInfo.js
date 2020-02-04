import React from "react";

const StockInfo = ({ stockInfo }) => {
  return (
    <div>
      <div>
        <div>Portfolio</div>
        <div>{stockInfo}</div>
      </div>
      <div></div>
    </div>
  );
};

export { StockInfo };
