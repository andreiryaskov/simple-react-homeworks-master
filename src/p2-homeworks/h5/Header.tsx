import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.header}>
            <ul>
                <li><NavLink to={PATH.PRE_JUNIOR}
                             className={s.link}>
                    pre-junior
                </NavLink></li>
                <li><NavLink to={PATH.JUNIOR}
                             className={s.link}>
                    junior
                </NavLink></li>
                <li><NavLink to={PATH.JUNIOR_PLUS}
                             className={s.link}>
                    junior-plus
                </NavLink></li>
            </ul>
        </div>
    )
}

export default Header
