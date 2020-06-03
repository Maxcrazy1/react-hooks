import React, { useState, useEffect } from "react";
import { Rol, Imagen, Container, Heading } from "./components/AppStyle";
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
      <div>
        <Imagen src={coinImage}></Imagen>
        <hr />
        <Rol>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            fugit quas voluptates! Sapiente totam, consectetur repudiandae quos
            consequuntur dolorum asperiores commodi placeat vero ducimus, quidem
            distinctio tenetur architecto sunt praesentium. Perferendis
            necessitatibus labore, praesentium harum perspiciatis pariatur
            fugiat inventore tenetur culpa neque eligendi earum animi quod
            obcaecati ea sapiente sunt numquam facere. Magnam, reprehenderit. Ea
            eos pariatur perferendis accusamus quis? Illo deleniti nulla quam
            nemo et temporibus voluptatibus porro consectetur ipsa error
            mollitia voluptates perspiciatis, aliquam aliquid sapiente incidunt,
            minus reiciendis, eos aut quidem? Doloremque minus sunt explicabo
            nihil ex? Nulla temporibus laboriosam quos neque, blanditiis eaque.
            Aspernatur possimus quidem optio quas vitae voluptate libero fugit
            earum dolor molestiae, sunt repellat itaque omnis, ea illo
            dignissimos minus! Perferendis, provident amet.
          </p>
        </Rol>
      </div>
      <div>
        <Heading>Cryptocurrency prices</Heading>
        <Home saveCoin={saveCoin} saveCryptCoin={saveCryptCoin} />
        {ComponentExchange}
      </div>
    </Container>
  );
}
