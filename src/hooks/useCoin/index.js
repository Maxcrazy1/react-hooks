import React, { Fragment, useState } from "react";
import {Select,Label} from './style'


const useCoin = (textLabel, initialState, coins) => {
  const [state, updateState] = useState(initialState);

  const SelectCoin = () => (
    <Fragment>
      <Label htmlFor="">{textLabel} </Label>
      <Select onChange={e=>updateState(e.target.value)} value={state}>
        <option value="">Select type coin</option>
        {coins.map((coin) => (
          <option key={coin.code} value={coin.code}>
            {coin.name}{" "}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SelectCoin, updateState];
};

export default useCoin;
