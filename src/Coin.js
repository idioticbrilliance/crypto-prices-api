import './Coin.css';

import React from 'react';

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p classname="coin-volume">${volume.toLocaleString()}</p>
          <p>
            {priceChange < 0 ? (
              <p className="coin-percent-red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent-green">{priceChange.toFixed(2)}%</p>
            )}
          </p>
          <p className="coin-marketcap">
            Mkt cap: ${marketCap.toLocaleString()}
          </p>
          <button className="coin-buy-coin">View Coin</button>
        </div>
      </div>
    </div>
  );
};

export default Coin;
