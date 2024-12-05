import './header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <header className='header'>
            <div className='header__item'>
                <p><Link className='borel-regular' to='/'>Burger Builder</Link></p>
                <p>
                    <Link className='borel-regular' to='/login'
                        onClick={() => user && localStorage.setItem('user', JSON.stringify({ ...user, isLogin: false }))}
                    >
                        {user && user.isLogin ? 'Logout' : 'Login'}
                    </Link>
                </p>
                <p><Link className='borel-regular' to='/orders'>Orders</Link></p>
            </div>
        </header>
    )
}
