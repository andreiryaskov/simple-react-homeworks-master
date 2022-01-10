import React from 'react'
import s from './../Header.module.css';

function JuniorPlus() {
    return (
        <div>
            <h1>JUNIOR PLUS</h1>
            <img className={s.jun_img}
                 src="https://crosti.ru/patterns/00/0a/b0/47012fc8f5/preview.jpg"
                 alt="JunPlus"/>
        </div>
    )
}

export default JuniorPlus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз