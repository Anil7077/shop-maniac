import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Sidebar = ({ setIsOpen }) => {
    const { data: session } = useSession()
    const router = useRouter()
    const path = router.pathname
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className='navbar' style={{ alignItems: 'start', height: '100%' }}>
                <div className="navbar-container">
                    {/*logo div*/}
                    <div className="navbar-logo-div">
                        <button className="navbar-toggler" onClick={closeMenu}>
                            <i class="fas fa-times"></i>
                        </button>
                        <input type="search" name="search" placeholder="Search..." className="navbar-search mt-4" id="search" />
                    </div>
                    {/*search input*/}
                    {/*item list*/}
                    <ul className="menu-list">
                        <li className="menu-item">
                            <Link href="/" className={path == '/' ? "active" : ''} onClick={closeMenu}><i class="fas fa-home" style={{ color: 'black', marginRight: '5px', paddingLeft: '4px' }}></i>Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/products" className={path == '/products' ? "active" : ''} onClick={closeMenu}><i class="fas fa-shopping-bag" style={{ color: 'black', marginRight: '5px', paddingLeft: '4px' }}></i>Shop</Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/about-us" className={path == '/about-us' ? "active" : ''} onClick={closeMenu}><i class="fas fa-bookmark" style={{ color: 'black', marginRight: '5px', paddingLeft: '4px' }}></i>About Us</Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/contact-us" className={path == '/contact-us' ? "active" : ''} onClick={closeMenu}><i class="fas fa-address-book" style={{ color: 'black', marginRight: '5px', paddingLeft: '4px' }}></i>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='sidebar-log-btn'>
                    {!session ?
                        <>
                        <div className='login-link'>
                            <Link href='/login' onClick={closeMenu}><i class="fas fa-sign-in-alt me-3" style={{color: 'white', fontSize: '20px'}}></i>Login</Link>
                        </div>
                        </>
                        :
                        <button className='log-btn' onClick={() => signOut()}><i class="fas fa-sign-out-alt me-3" style={{color: 'white', fontSize: '20px'}}></i>Logout</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar