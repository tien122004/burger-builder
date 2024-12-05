import React, { useState, useMemo } from 'react';
import './burger.scss';
import BurgerBuilder from '../../components/BurgerBuilder/BurgerBuilder';
import BurgerInfo from '../../components/BurgerInfo/BurgerInfo';
import { message } from 'antd';
import { db } from '../../Config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function Burger() {
    const [ingredients, setIngredients] = useState({
        salad: { label: 'Salad', count: 0, price: 0.5 },
        bacon: { label: 'Bacon', count: 0, price: 1.0 },
        cheese: { label: 'Cheese', count: 0, price: 0.8 },
        meat: { label: 'Meat', count: 0, price: 1.5 },
    });
    const [checkout, setCheckout] = useState(false);
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const totalPrice = useMemo(() => {
        return Object.keys(ingredients).reduce((acc, type) => {
            return acc + ingredients[type].count * ingredients[type].price;
        }, 0).toFixed(2);
    }, [ingredients]);

    const handleIngredientChange = (type, action) => {
        setIngredients((prev) => {
            const updatedCount = Math.max(0, prev[type].count + (action === 'increase' ? 1 : -1));
            return {
                ...prev,
                [type]: { ...prev[type], count: updatedCount },
            };
        });
    };

    const checkLogin = () => {
        if (user.isLogin) {
            setCheckout(true);
        } else {
            setCheckout(false);
            message.error('Vui lòng đăng nhập');
        }
    };

    const handleOrderSubmit = (orderData) => {
        addDoc(collection(db, 'Orders'), orderData)
        setIngredients(resetIngredients())
    };

    const resetIngredients = () => {
        return Object.keys(ingredients).reduce((acc, key) => {
            acc[key] = { ...ingredients[key], count: 0 };
            return acc;
        }, {});
    };

    return (
        <div className="burger">
            <div className="burger__header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQTbKIY-B-3J5yt7BxQCm8RWiTKne13IWAw&s" alt="Burger Logo" />
            </div>
            <div className="burger__container">
                <div className="burger__price">
                    <p className="burger__price-title">Price</p>
                    <p className="burger__price-total">{totalPrice} $</p>
                </div>
                {checkout ? (
                    <BurgerInfo
                        ingredients={ingredients}
                        totalPrice={totalPrice}
                        onSubmit={handleOrderSubmit}
                    />
                ) : (
                    <BurgerBuilder
                        ingredients={ingredients}
                        onIngredientChange={handleIngredientChange}
                    />
                )}
                <div className="burger__btn">
                    {!checkout && <button className='burger__btn' onClick={checkLogin}>Checkout</button>}
                    {checkout && <button onClick={() => setCheckout(false)}>Cancel</button>}
                </div>
            </div>
        </div>
    );
}
