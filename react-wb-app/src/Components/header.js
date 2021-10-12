import React from 'react';
import { Button } from './button';
import './css/header.css';

export const Header = () => {

    return (
        <>
            <div className="header-container">
                <video src="/videos/video-2.mp4" loop muted autoPlay></video>
                <h1>WELLCOME TO HOME</h1>
                <p>Wat Yiu ARe Wating For</p>
                <div className="header-btns">
                    <Button btnStyle="btn--primary" btnSize="btn--large">Watch Triller <i className="far fa-play-circle" /></Button>
                    <Button btnStyle="btn--outline">Any Text</Button>
                </div>
            </div>
        </>
    )

}