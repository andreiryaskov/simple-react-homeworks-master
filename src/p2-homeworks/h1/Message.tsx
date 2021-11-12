import React from 'react';
import style from './Message.module.css';
import {MessageDataType} from "./HW1";

function Message(props: MessageDataType) {
    return (
        <div className={style.message_wrapper}>
            <img className={style.message_img} src={props.avatar} alt="Me"/>
            <div className={style.message_smallBlock}></div>
            <div className={style.message_textWrapper}>
                <div className={style.message_name}>{props.name}</div>
                <div className={style.message_text}>{props.message}</div>
                <div className={style.message_time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
