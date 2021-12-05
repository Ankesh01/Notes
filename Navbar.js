import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-Left">
                    <span className="logo">Logo</span>
                </div>
                <div className="navbar-Center">
                        <div className="searchbar">
                            <input type="search" className="search-input" placeholder="Search..."/>
                        </div>
                </div>
                <div className="navbar-Right">
                        <div className="Links">
                            <span className="link">Home</span>
                            <span className="link">Login</span>
                            <span className="link">Register</span>
                        </div>
                </div>
             

            </div>
        </>
    )
}

export default Navbar
