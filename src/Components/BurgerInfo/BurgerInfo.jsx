import React, { useState } from 'react';
import './burgerInfo.scss';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

export default function BurgerInfo({ ingredients, totalPrice, onSubmit }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        const userId = JSON.parse(localStorage.getItem('user'))
        e.preventDefault();
        const orderData = {
            ...formData,
            ingredients,
            totalPrice,
            userId: userId.id
        };
        onSubmit(orderData);
        message.success('Đặt hàng thành công')
        setTimeout(() => {
            navigate('/orders')
        }, 1000);
    };

    return (
        <form className="burger-info" onSubmit={handleSubmit}>
            <div className="burger-container">
                <p className="burger-info__title">Contact Data</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <textarea name="note" placeholder="Note" rows={4} cols={35} />
                <button type="submit">Order</button>
            </div>
        </form>
    );
}
