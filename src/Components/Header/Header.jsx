import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <div className='header__item'>
                <p><Link className='borel-regular' to='/'>Burger Builder</Link></p>
                <p><Link className='borel-regular' to='/login'>Login</Link></p>
                <p><Link className='borel-regular' to='/orders'>Orders</Link></p>
            </div>
        </header>
    )
}
