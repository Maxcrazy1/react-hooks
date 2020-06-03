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
        <H4>💰 Now price: {values.PRICE}</H4>
        <P>💱 From {values.FROMSYMBOL} To {values.TOSYMBOL}</P>
        <P>👛 Lowest today price: {values.LOWDAY}</P>
        <P>💹 Highest today price: {values.HIGHDAY}</P>
        <P>🏧 changes of the day: {values.CHANGEDAY}</P>
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
