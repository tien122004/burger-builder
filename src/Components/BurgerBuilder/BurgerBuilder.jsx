import React, { useState } from 'react'
import './burgerBuilder.scss'

export default function BurgerBuilder() {
    const [salad, setSalad] = useState(0)
    const [bacon, setBacon] = useState(0)
    const [cheese, setCheese] = useState(0)
    const [meat, setMeat] = useState(0)


    return (
        <div className="burger-builder">
            <div className="burger-builder__row">
                <div className='d-flex'>
                    <p className="burger-builder__name">Salad</p>
                    <input className='burger-builder__quantity' disabled value={salad} />
                </div>
                <div className="burger-builder__btn">
                    <button onClick={() => salad > 0 && setSalad(salad - 1)}
                        className={`${salad === 0 ? 'disable' : ''}`}
                    >Less</button>
                    <button onClick={() => setSalad(salad + 1)}>More</button>
                </div>
            </div>
            <div className="burger-builder__row">
                <div className='d-flex'>
                    <p className="burger-builder__name">Bacon</p>
                    <input className='burger-builder__quantity' disabled value={bacon} />
                </div>
                <div className="burger-builder__btn">
                    <button onClick={() => bacon > 0 && setBacon(bacon - 1)}
                        className={`${bacon === 0 ? 'disable' : ''}`}
                    >Less</button>
                    <button onClick={() => setBacon(bacon + 1)}>More</button>
                </div>
            </div>
            <div className="burger-builder__row">
                <div className='d-flex'>
                    <p className="burger-builder__name">Cheese</p>
                    <input className='burger-builder__quantity' disabled value={cheese} />
                </div>
                <div className="burger-builder__btn">
                    <button onClick={() => cheese > 0 && setCheese(cheese - 1)}
                        className={`${cheese === 0 ? 'disable' : ''}`}
                    >Less</button>
                    <button onClick={() => setCheese(cheese + 1)}>More</button>
                </div>
            </div>
            <div className="burger-builder__row">
                <div className='d-flex'>
                    <p className="burger-builder__name">Meat</p>
                    <input className='burger-builder__quantity' disabled value={meat} />
                </div>
                <div className="burger-builder__btn">
                    <button onClick={() => meat > 0 && setMeat(meat - 1)}
                        className={`${meat === 0 ? 'disable' : ''}`}
                    >Less</button>
                    <button onClick={() => setMeat(meat + 1)}>More</button>
                </div>
            </div>
        </div>
    )
}
