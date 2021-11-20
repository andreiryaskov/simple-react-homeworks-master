import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={style.affair_wrapper}>
            <div className={style.affair_name}>
                show some text
            </div>
            <button className={style.affair_deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
