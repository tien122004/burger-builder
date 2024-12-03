import React, { useEffect, useState } from 'react'
import './orders.scss'
import Header from '../../Components/Header/Header'

export default function Orders() {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(data => {
                const ingredientsUser = data.map(item => {
                    return item.ingredients
                })
                setIngredients(ingredientsUser)
            }).catch(err => console.log('Lỗi fetch data=>> ' + err))
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
                    {ingredients.map(items => {
                        return items.map(item => {
                            return <div className="order__ingredients-item" key={item.id}>
                                <p className='order__ingredients-detail'>
                                    {`Salad(${item.salad}) Bacon(${item.bacon}) Cheese(${item.cheese}) Meat(${item.meat})`}
                                </p>
                                <p className="order__ingredients-price">4$</p>
                            </div>
                        })
                    })
                    }
                </div>
            </div>
        </div>
    )
}
