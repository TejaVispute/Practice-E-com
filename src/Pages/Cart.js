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
                            <h1>Product Quantity:-{product.quantity}</h1>
                            <img width={200} src={product.image} alt="" />
                            <button className='btn btn-outline-dark me-2'>+</button>
                            <button className='btn btn-outline-dark'>-</button>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Cart