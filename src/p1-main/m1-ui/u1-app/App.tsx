import React from 'react'
import style from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import HW6 from "../../../p2-homeworks/h6/HW6";
import HW7 from "../../../p2-homeworks/h7/HW7";
import HW8 from "../../../p2-homeworks/h8/HW8";

function App() {
    return (
        <div className={style.App}>
            <div><h1>React homeworks:</h1></div>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>
            <HW6/>
            <HW7/>
            <HW8/>
        </div>
    )
}

export default App
