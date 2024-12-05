import React from 'react';
import './burgerBuilder.scss';

export default function BurgerBuilder({ ingredients, onIngredientChange }) {

    return (
        <div className="burger-builder">
            <div className="burger-builder__title d-flex flex-start gap-30">
                <p>Ingredients</p>
                <p>Count</p>
                <p>Price</p>
            </div>
            {Object.keys(ingredients).map((type) => (
                <div key={type} className="burger-builder__row">
                    <div className="d-flex">
                        <p className="burger-builder__name">{ingredients[type].label}</p>
                        <input
                            className="burger-builder__count"
                            disabled
                            value={ingredients[type].count}
                        />
                        <p className='m-r55'>{ingredients[type].price}$</p>
                    </div>
                    <div className="burger-builder__btn">
                        <button
                            onClick={() => onIngredientChange(type, 'decrease')}
                            className={`${ingredients[type].count === 0 ? 'disable' : ''}`}
                        >
                            Less
                        </button>
                        <button onClick={() => onIngredientChange(type, 'increase')}>More</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
