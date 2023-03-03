import React from 'react'
import ProductCard from '../Components/ProductCard';
import { useEffect } from 'react';
import Loading from '../Components/Loading';
import { useBookContext } from '../Context/BooksContext';
function Product() {
    let { data, setData, filter, setFilter, loading, setLoading } = useBookContext()
    let componentMounted = true;
    // console.log(filter)

    // for fetching data from backend
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await fetch("http://localhost:4000/books/")
                .then((response) => response.json())
                .then((data) => {
                    if (componentMounted) {
                        setData(data);
                        setFilter(data)
                        setLoading(false);
                        // console.log(filter)
                    }

                });
            return componentMounted = false;
        }
        fetchData();
    }, [])


    function filteredData(value) {
        let filteredBooks = data.filter((e) => e.categories === value);
        setFilter(filteredBooks);
    }


    return (
        <div>
            {/* heading */}
            <div>
                <h1 className='text-center'>All products display here</h1>
            </div>


            {/* Categories button */}
            <div className="buttons" style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={() => setFilter(data)} className='btn btn-outline-dark me-2'>All</button>
                <button onClick={() => filteredData("comics")} className='btn btn-outline-dark me-2'>Comic</button>
                <button onClick={() => filteredData("Novels")} className='btn btn-outline-dark me-2'>Novels</button>
                <button onClick={() => filteredData("relegius")} className='btn btn-outline-dark'>Relegius</button>
            </div>



            <div className="cards-wrapper container" >
                {loading ? <Loading /> : <ProductCard filter={filter} />}
            </div>
        </div>
    )
}

export default Product;