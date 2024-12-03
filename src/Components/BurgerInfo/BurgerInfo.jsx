import React from 'react'
import './burgerInfo.scss'

export default function BurgerInfo() {
    return (
        <div className='burger-info'>
            <div className="burger-container">
                <p className="burger-info__title">Contact Data</p>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Phone' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Address' />
                <textarea placeholder='Note' rows={4} cols={35} style={{ paddingTop: 3, paddingLeft: 5 }} />
            </div>
        </div>
    )
}
