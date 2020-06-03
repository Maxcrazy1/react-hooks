import React from "react";
import {Button} from './style';
import Error from '../Error';
import { ToastContainer } from "react-toastify";

const Home = ({SelectCoin,SelectCrypto,error,CoinExchange}) => {
  return (
    <form onSubmit={CoinExchange}>
      {error ? <Error msg="Error submit" /> : null}
      <SelectCoin />
      <SelectCrypto />
      <Button type="submit" value="Calculate" />
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
      />
    </form>
  );
};

export default Home;
