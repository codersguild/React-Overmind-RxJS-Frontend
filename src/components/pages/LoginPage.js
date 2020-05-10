import * as React from 'react'
import { useOvermind } from '../../overmind'
import { useHistory } from "react-router-dom";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
import googleLogo from "../../assets/google.svg";
import ToastNotification from '../widgets/ToastNotification';

const LoginPage = () => {

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  let history = useHistory();

  const { state, actions, effects, reaction } = useOvermind();

  return (
      <div className="bg-gray-900 text-white flex flex-1 pt-20 px-10 justify-center">
       
      </div>
  );
}

export default LoginPage;
