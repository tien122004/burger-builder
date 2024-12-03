import React, { useState } from 'react'
import './burger.scss'
import BurgerBuilder from '../../Components/BurgerBuilder/BurgerBuilder'
import BurgerInfo from '../../Components/BurgerInfo/BurgerInfo'

export default function Burger() {
    const [check, setCheck] = useState(false)
    return (
        <div className='burger'>
            <div className="burger__header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQTbKIY-B-3J5yt7BxQCm8RWiTKne13IWAw&s" alt="" />
            </div>
            <div className="burger__container">
                <div className="burger__price">
                    <p className='burger__price-title'>Price</p>
                    <p className='burger__price-total'>5.8$</p>
                </div>
                {check ? <BurgerInfo /> : <BurgerBuilder />}
                <div className='burger__btn'>
                    <button type='submit'>{check ? 'Order' : 'Checkout'}</button>
                </div>
            </div>
        </div>
    )
}
