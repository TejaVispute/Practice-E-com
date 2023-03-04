import React from 'react'
import { useBookContext } from '../Context/BooksContext'


function Cart() {
    let { cart, setCart } = useBookContext();


    const HandleAdd = (product) => {
        const ProductExists = cart.find((item) => item._id === product._id);

        if (ProductExists) {
            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? { ...ProductExists, quantity: ProductExists.quantity + 1 }
                        : item
                )
            )
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }

    }


    const HandleRemoveProduct = (product) => {
        const ProductExists = cart.find((item) => item._id === product._id);
        if (ProductExists.quantity === 1) {
            setCart(cart.filter((item) => item._id !== product._id))
        } else {
            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? { ...ProductExists, quantity: ProductExists.quantity - 1 }
                        : item
                )
            );
        }
    };
    
    return (
        <>
            <div>{
                cart.length === 0 && <h1>Chal haat</h1>
            }</div>
            <div className="cart-item">
                {
                    cart.map((product) => (
                        <>
                            <h5>{product.name}</h5>
                            <h5>Product Quantity:-{product.quantity}</h5>
                            <img width={200} src={product.image} alt="" />
                            <button onClick={() => HandleAdd(product)} className='btn btn-outline-dark me-2'>+</button>
                            <button onClick={() => HandleRemoveProduct(product)} className='btn btn-outline-dark'>-</button>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Cart