import React from 'react';
import {Link} from 'react-router-dom';
import './css/button.css'

export const Button = ({children, btnStyle, btnSize, click}) => {

    // CONSTANTS
    const STYLES = ['btn--primary', 'btn--outline'];
    const SIZES = ['btn--med', 'btn--large'];

    // Checks
    const chkBtnStyle = (STYLES.includes(btnStyle)) ? btnStyle : STYLES[0];
    const chkBtnSize = (SIZES.includes(btnSize)) ? btnSize : SIZES[0];

    return (
        <Link to="/signup" className="btn-mobile">
            <button className={`btn ${chkBtnStyle} ${chkBtnSize}`} onClick={click}>
                {children}
            </button>
        </Link>
    )
}