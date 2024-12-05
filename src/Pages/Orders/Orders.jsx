import React, { useEffect, useState } from 'react'
import './orders.scss'
import Header from '../../components/Header/Header'
import { db } from '../../Config/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Orders() {
    const [ingredients, setIngredients] = useState([])

    const getOrders = async () => {
        const getUserId = JSON.parse(localStorage.getItem('user'))
        const response = await getDocs(collection(db, 'Orders'))
        const data = response.docs.map(item => {
            const order = item.data().ingredients
            return {
                salad: order.salad,
                bacon: order.bacon,
                cheese: order.cheese,
                meat: order.meat,
                totalPrice: item.data().totalPrice,
                userId: item.data().userId
            }
        })
        const checkData = data.filter(item => item.userId === getUserId.id)
        setIngredients(checkData)
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div className='order'>
            <Header />
            <div className="order__container">
                <div className="order__title">
                    <p className="order__title-ingredients">Ingredients</p>
                    <p className="order__title-price">Price</p>
                </div>
                <div className="order__ingredients">
                    {ingredients.map((item, index) => {
                        return <div className="order__ingredients-item" key={index}>
                            <p className='order__ingredients-detail'>
                                {`Salad(${item.salad.count}) Bacon(${item.bacon.count}) Cheese(${item.cheese.count}) Meat(${item.meat.count})`}
                            </p>
                            <p className="order__ingredients-price">{item.totalPrice}$</p>
                        </div>
                    })
                    }
                </div>
            </div>
        </div>
    )
}
