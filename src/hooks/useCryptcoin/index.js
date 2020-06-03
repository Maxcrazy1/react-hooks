import React, { Fragment, useState } from "react";
import {Label,Select} from '../useCoin/style'

const useCryptCoin = (textLabel, initialState, cryptCoins) => {
  const [state, updateState] = useState(initialState);

  const selectCryptCoin = () => (
    <Fragment>
      <Label>{textLabel} </Label>
      <Select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">Select type cryptcoin</option>
        {cryptCoins.map((coin) => (
          <option key={coin.CoinInfo.Id} value={coin.CoinInfo.Name}>
            {coin.CoinInfo.Name}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, selectCryptCoin, updateState];
};

export default useCryptCoin;
