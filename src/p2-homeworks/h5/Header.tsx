import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.header_nav}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={`${s.link} ${s.border}`}>
                    PRE-JUNIOR
                </NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={`${s.link} ${s.border}`}>
                    JUNIOR
                </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                             className={`${s.link} ${s.border}`}>
                    JUNIOR+
                </NavLink>
                <nav className={`${s.menu_nav} ${s.border}`}>
                    MENU
                </nav>
        </div>
    )
}

export default Header
