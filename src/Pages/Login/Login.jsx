import React, { useState } from 'react';
import './login.scss';
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { auth } from '../../Config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    console.log(auth)

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            message.success('Login success');
            navigate('/');
        } catch (error) {
            message.error('Login failed: ' + error.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            message.success('Register success');
            setIsLogin(false);
        } catch (error) {
            message.error('Register failed: ' + error.message);
        }
    };

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
