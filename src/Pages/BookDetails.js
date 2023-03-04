import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBookContext } from '../Context/BooksContext';

function BookDetails() {
    let { id } = useParams();
    let { cart, setCart, data } = useBookContext();
    // let {  } = useBookContext();

    let findData = data.find((e) => e._id === id);
    // console.log(findData)
    function HandleClick(findData) {
        // console.log(value._id)
        const checkCart = cart.find((item) => item._id === findData._id);
        if (checkCart) {
            console.log("already exists")
            setCart(cart.map((item) => item._id === findData._id ?
                { ...checkCart, quantity: checkCart.quantity + 1 } : item))
        } else {
            console.log("new item")
            setCart([...cart, { ...findData, quantity: 1 }])
        }


    }

    return (
        <>
            <h4>{findData.name}</h4>
            <img width="200px" src={findData.image} alt="not found" />
            <div className="price"><b>Rs .{findData.price}</b></div>
            <button className='btn btn-outline-danger' onClick={() => HandleClick(findData)}>Add to Cart</button>
        </>
    )
}

export default BookDetails