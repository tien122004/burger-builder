import React, { useEffect, useState } from 'react';
import './login.scss';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { db } from '../../Config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { message } from 'antd';

export default function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const response = await getDocs(collection(db, 'users'))
            const data = response.docs.map(user => {
                return {
                    id: user.id,
                    email: user.data().email,
                    password: user.data().password,
                }
            })
            setUsers(data)
        } catch (error) {
            console.log('Error getUsers::' + error)
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = { email, password };
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            message.error('Tài khoản đã tồn tại');
        } else {
            try {
                await addDoc(collection(db, 'users'), newUser);
                message.success('Tài khoản đã được đăng ký');
                setUsers([...users, newUser]);
            } catch (error) {
                message.error('Lỗi đăng ký tài khoản');
                console.log('Error handleRegister::' + error);
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const userExists = users.some(user => {
            if (user.email === email && user.password === password) {
                localStorage.setItem('user', JSON.stringify({ ...user, isLogin: true }))
                return true
            }
            return false
        })
        if (userExists) {
            message.success('Đăng nhập thành công');
            navigate('/');
        } else {
            message.error('Email hoặc password không chính xác');
        }
    };

    useEffect(() => { getUsers() }, [])

    return (
        <div className='login'>
            <Header />
            <div className="login__container">
                <div className="login__title">
                    <p>{isLogin ? 'Sign Up' : 'Sign In'}</p>
                    <button>X</button>
                </div>
                <form
                    className="login__form"
                    onSubmit={isLogin ? handleRegister : handleLogin}
                >
                    <div className="login__form-email">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login__form-password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='login__form-signin'>
                        <button type="submit">{isLogin ? 'Sign Up' : 'Sign In'}</button>
                    </div>
                </form>
                <p className="title">Or</p>
                <div className="login__form-signup">
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
}
