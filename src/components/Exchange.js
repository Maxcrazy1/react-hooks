import React from "react";
import styled from "@emotion/styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const P = styled.p`
  text-align: center;
  color: #4a00de;
`;

const H4 = styled.h4`
  text-align: center;
  color: #510893;
`;

function Exchange({ result }) {
  if (Object.keys(result).length === 0) return null;

  const showToast = (values) => {
    const toPrint = (
      <div>
       <H4><span role="img" aria-label="value">💰</span> Now price: {values.PRICE}</H4>
        <P><span role="img" aria-label="value">💱</span> From {values.FROMSYMBOL} To {values.TOSYMBOL}</P>
        <P><span role="img" aria-label="value">👛</span> Lowest today price: {values.LOWDAY}</P>
        <P><span role="img" aria-label="value">💹</span> Highest today price: {values.HIGHDAY}</P>
        <P><span role="img" aria-label="value">🏧</span> changes of the day: {values.CHANGEDAY}</P>
      </div>
    );

    toast(toPrint, {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return <div>{showToast(result)}</div>;
}

export default Exchange;
