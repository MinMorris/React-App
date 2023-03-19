import React from 'react';

function Navbar() {
    return (  
        <div>
            <nav className='navbar'>
                <div className="container">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">Profile</a>
                    <a className="nav-link" href="#">Account</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
