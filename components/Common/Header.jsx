import { signIn, signOut } from 'next-auth/react'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { push as Menu } from 'react-burger-menu';
import Sidebar from './Sidebar'


const CustomBurgerIcon = () => <img src="images/menu (1).png" />;

const Header = () => {
    const { data: session } = useSession()
    const users = useSelector((state) => state.newCart.myCart)
    const cartCount = users ? users.length : 0;
    const router = useRouter()
    const path = router.pathname
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuStateChange = (state) => {
        setIsOpen(state.isOpen);
    };

    
    return (
        <>
            <section id="header" className='sticky-top'>
                <a href="#"><img src="https://i.postimg.cc/x8ncvFjr/logo.png" /></a>
                <div>
                    <ul id="navbar" style={{ marginBottom: 0 }}>
                        <li><Link href="/" className={path == '/' ? "active" : ''}>Home</Link></li>
                        <li><Link href="/products" className={path == '/products' ? "active" : ''}>Shop</Link></li>
                        <li><Link href="/about-us" className={path == '/about-us' ? "active" : ''}>About Us</Link></li>
                        <li><Link href="/contact-us" className={path == '/contact-us' ? "active" : ''}>Contact</Link></li>
                        <div>

                        </div>

                    </ul>
                </div>
                <div className='login-register-box'>
                    {!session ?
                        <>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='cart-items-icon'>
                                    <Link href="/cart-items">
                                        <i class="fas fa-shopping-cart"></i>
                                        <span className='cart-sup'>{cartCount}</span>
                                    </Link>
                                </div>
                                <button className='login-btn' onClick={() => signIn()}>
                                    <i class="fas fa-sign-in-alt me-2"></i> Login
                                </button>
                                <button className='register-btn'>
                                    <i class="fas fa-user me-2"></i> Register
                                </button>
                            </div>
                        </>
                        :
                        <>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Welcome User<i class="fas fa-user ms-2"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><button className="dropdown-item" type="button">Profile</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => signOut()}>Logout</button></li>
                                </ul>
                            </div>

                        </>
                    }
                </div>
                <div id="mobile">
                    <div className='cart-items-icon'>
                        <Link href="/cart-items">
                            <i class="fas fa-shopping-cart"></i>
                            <span className='cart-sup'>{cartCount}</span>
                        </Link>
                    </div>
                    {/* <i id="bar" className="fas fa-outdent" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" /> */}
                    <div style={{width: "50px"}}>
                        <Menu
                            customBurgerIcon={<CustomBurgerIcon />}
                            right
                            isOpen={isOpen}
                            onStateChange={handleMenuStateChange}
                        >
                            {/* <Link href="/" className={path == '/' ? "active" : ''} onClick={closeMenu}>Home</Link>
                            <Link href="/products" className={path == '/products' ? "active" : ''} onClick={closeMenu}>Shop</Link>
                            <Link href="/about-us" className={path == '/about-us' ? "active" : ''} onClick={closeMenu}>About Us</Link>
                            <Link href="/contact-us" className={path == '/contact-us' ? "active" : ''} onClick={closeMenu}>Contact</Link> */}
                            <Sidebar setIsOpen={setIsOpen}/>
                        </Menu>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Header
