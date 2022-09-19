import React from 'react'
import _ from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={_.message}>
            <img className={_.img}
                src={props.avatar}
                alt='profile avatar'/>
            <div className={_.text}>
                <span>{props.name}</span>
                <span>{props.message}</span>
                <span className={_.time}>{props.time}</span>
            </div>

        </div>
    )
}

export default Message
