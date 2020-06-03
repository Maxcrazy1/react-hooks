import React, { useState, useEffect } from "react";
import { P, Avatar, Imagen, Container, Heading } from "./components/AppStyle";
import coinImage from "./coins.png";
import Home from "./containers/Home";
import Exchange from "./components/Exchange";
import Spinner from "./components/Spinner";
import axios from "axios";

export default function App() {
  const [coin, saveCoin] = useState("");
  const [cryptCoin, saveCryptCoin] = useState("");
  const [result, saveResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const exchangeCoins = async () => {
      if (coin === "") return;
      setLoading(true);
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptCoin}&tsyms=${coin}`;
      const fetch = await axios.get(url);

      setTimeout(() => {
        saveResult(fetch.data.DISPLAY[cryptCoin][coin]);
        setLoading(false);
        saveResult({});
      }, 3000);
    };
    exchangeCoins();
  }, [coin, cryptCoin]);

  const ComponentExchange = loading ? (
    <Spinner />
  ) : (
    <Exchange result={result} />
  );
  return (
    <Container>
      <div style={{textAlign:'center'}}>
        <Imagen src={coinImage}></Imagen>
        <Container
          style={{
            marginTop: "50px",
            backgroundColor: "#66a2fe",
            borderRadius: "8px",
          }}
        >
      <div style={{textAlign:'center'}}>
            <P>
              <Avatar src="https://cdn.auth0.com/blog/blog/React-logo.png"></Avatar>{" "}
              React
            </P>
            <P>
              <Avatar src="https://www.luisllamas.es/wp-content/uploads/2019/05/axios.png"></Avatar>{" "}
              Axios
            </P>
          </div>
      <div style={{textAlign:'Center'}}>
            <P>
              <Avatar src="https://i.morioh.com/2019/11/11/5ffab449766d.jpg"></Avatar>{" "}
              React Hooks
            </P>
            <P>
              <Avatar src="https://styled-components.com/logo.png"></Avatar>{" "}
              Styled Components
            </P>
          </div>
        </Container>
      </div>
      <div>
        <Heading>Cryptocurrency prices</Heading>
        <Home saveCoin={saveCoin} saveCryptCoin={saveCryptCoin} />
        {ComponentExchange}
      </div>
    </Container>
  );
}
