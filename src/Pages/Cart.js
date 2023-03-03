import React from 'react'
import { useBookContext } from '../Context/BooksContext'


function Cart() {
    let { cart } = useBookContext();
    console.log(cart);
    return (
        <>
            <div>{
                cart.length === 0 && <h1>Chal haat</h1>
            }</div>
            <div className="cart-item">
                {
                    cart.map((product) => (
                        <>
                            <h1>{product.name}</h1>
                            <h1>{product.quantity}</h1>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Cart