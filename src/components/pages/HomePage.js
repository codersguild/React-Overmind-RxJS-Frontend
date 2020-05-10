import React, { useEffect, useState } from 'react'
import { useOvermind } from '../../overmind'
import { useHistory } from "react-router-dom"
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import { socket_live, events } from '../sockets'
import image from '../../assets/undraw_lightbulb_moment_evxr.svg'
import ToastNotification from '../widgets/ToastNotification'

export default function HomePage() {

    let history = useHistory();

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: white;
    `;

    return (
        <div className="w-full flex justify-center py-10 px-3">
            <img src={image} onClick={() => {
            	ToastNotification('success', "Image Clicked")
            }}/> 
            <pre>
            	'Click the image for a toast'
            </pre>
        </div>
    )

}
