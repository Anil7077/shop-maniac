import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Sidebar = ({setIsOpen}) => {
    const router = useRouter()
    const path = router.pathname
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
        <div className='navbar'>
            <div className="navbar-container">
                {/*logo div*/}
                <div className="navbar-logo-div">
                    <button className="navbar-toggler" onClick={closeMenu}>
                    <i class="fas fa-times"></i>
                    </button>
                </div>
                {/*search input*/}
                <input type="search" name="search" placeholder="Search..." className="navbar-search" id="search" />
                <i id="icon-search" className="fas fa-regular fa-magnifying-glass" />
                {/*item list*/}
                <ul className="menu-list">
                    <li className="menu-item">
                    <Link href="/" className={path == '/' ? "active" : ''} onClick={closeMenu}><i class="fas fa-home" style={{color: 'black', marginRight: '5px', paddingLeft: '4px'}}></i>Home</Link>
                    </li>
                    <li className="menu-item">
                    <Link href="/products" className={path == '/products' ? "active" : ''} onClick={closeMenu}><i class="fas fa-shopping-bag" style={{color: 'black', marginRight: '5px', paddingLeft: '4px'}}></i>Shop</Link>
                    </li>
                    <li className="menu-item">
                    <Link href="/about-us" className={path == '/about-us' ? "active" : ''} onClick={closeMenu}><i class="fas fa-bookmark" style={{color: 'black', marginRight: '5px', paddingLeft: '4px'}}></i>About Us</Link>
                    </li>
                    <li className="menu-item">
                    <Link href="/contact-us" className={path == '/contact-us' ? "active" : ''} onClick={closeMenu}><i class="fas fa-address-book" style={{color: 'black', marginRight: '5px', paddingLeft: '4px'}}></i>Contact</Link>
                    </li>

                </ul>
            </div>
        </div>


        </>
    )
}

export default Sidebar