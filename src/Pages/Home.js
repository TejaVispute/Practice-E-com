import React from 'react'
import { useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import { useAuth0 } from '@auth0/auth0-react';
function Home() {

    let { user } = useAuth0();
    return (
        <>
            {user && <div>{JSON.stringify(user)}</div>}
            {!user && <div>Please Login</div>}
        </>

    )
}

export default Home;