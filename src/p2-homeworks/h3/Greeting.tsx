import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? style.errorInput : style.input // need to fix with (?:)



    return (
        <div className={style.greeting_wrapper}>
            <div className={style.input_wrapper}>
                <SuperInputText value={name}
                       onChange={setNameCallback}
                                onKeyDown={onEnter}
                       className={inputClass}/>
                <SuperButton onClick={addUser}>
                    add
                </SuperButton>
                <div className={style.totalUsers}>{totalUsers}</div>
            </div>
            <span className={style.errorText}>{error}</span>

        </div>
    )
}

export default Greeting
