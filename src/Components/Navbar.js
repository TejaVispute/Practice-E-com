import React from 'react'
import { NavLink } from 'react-router-dom'
import { useBookContext } from '../Context/BooksContext';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
function Navbar() {
    let { setSearch } = useBookContext();
    let { user } = useAuth0();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <NavLink style={{ textDecoration: "none", fontSize: "2rem" }} className="navbar-brand fw-bold " to="/">Navbar</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent" >
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item me-3">
                                <NavLink style={{ textDecoration: "none", color: "white" }} class="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item  me-3">
                                <NavLink style={{ textDecoration: "none", color: "white" }} class="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li class="nav-item  me-3">
                                <NavLink style={{ textDecoration: "none", color: "white" }} class="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item  me-3">
                                <NavLink style={{ textDecoration: "none", color: "white" }} class="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div class="d-flex" role="search">
                            <input class="form-control me-2" onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                            <NavLink to='/cart'><div><i style={{ color: "white", fontSize: "2rem" }} class="fa-solid fa-cart-shopping"></i></div></NavLink>
                        </div>

                        {user && <div><LogoutButton /></div>}
                        {!user && <div> <LoginButton /></div>}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;










