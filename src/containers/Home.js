import React, { useEffect, useState } from "react";
import Start from "../components/Home";
import useCoin from "../hooks/useCoin/";
import useCryptCoin from "../hooks/useCryptcoin/";
import axios from "axios";

const Home = ({ saveCoin, saveCryptCoin }) => {
  const [fetchCryptCoins, saveCryptCoins] = useState([]);
  const [error, saveError] = useState(false);

  const COINS = [
    { code: "USD", name: "USD AMERICAN" },
    { code: "VEF", name: "VENEZUELAN BOLIVAR" },
    { code: "MXN", name: "MEXICAN PESO" },
    { code: "COP", name: "COLOMBIAN PESO" },
    { code: "EUR", name: "EURO" },
  ];

  const [coin, SelectCoin] = useCoin("Select your coin", "", COINS);

  const [cryptCoin, SelectCrypto] = useCryptCoin(
    "Select your Cryptcoin",
    "",
    fetchCryptCoins
  );

  useEffect(() => {
    const fetchApiCoins = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const fetch = await axios.get(url);
      saveCryptCoins(fetch.data.Data);
    };
    fetchApiCoins();
  }, []);

  const CoinExchange = (e) => {
    e.preventDefault();

    if (coin === "" || cryptCoin === "") {
      saveError(true);
      return;
    }
    saveError(false);
    saveCoin(coin);
    saveCryptCoin(cryptCoin);
  };

  return (
    <Start
      SelectCoin={SelectCoin}
      SelectCrypto={SelectCrypto}
      error={error}
      CoinExchange={CoinExchange}
    />
  );
};

export default Home;
