import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,price,rating,images}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                tittel: title,
                images: images,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                    <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    <p>{"⭐".repeat(rating)}</p>
                </div>
            </div>
            <img src={images} />
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
