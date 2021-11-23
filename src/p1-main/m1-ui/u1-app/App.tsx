import React from 'react'
import style from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";

function App() {
    return (
        <div className={style.App}>
            <div><h1>React homeworks:</h1></div>
            <HW1/>
            <HW2/>
            <HW3/>
            {/*<HW4/>*/}
            {/*<HW5/>*/}

        </div>
    )
}

export default App
