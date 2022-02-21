import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    // onChangeRange?: (value: [number, number]) => void
    // value?: [number, number]
    onChangeRange?: (value: number) => void
    value: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                value={value}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    )
}

export default SuperDoubleRange
