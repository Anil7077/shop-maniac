import { signIn, signOut } from 'next-auth/react'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { push as Menu } from 'react-burger-menu';
import Sidebar from './Sidebar'
import Image from 'next/image'


const CustomBurgerIcon = () => <img src="images/menu (1).png" />;

const Header = ({bannerTitle}) => {
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
                <Link href="/"><img src="https://i.postimg.cc/x8ncvFjr/logo.png" /></Link>
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
                    <div className='cart-items-icon'>
                        <Link href="/cart-items">
                            <i class="fas fa-shopping-cart"></i>
                            <span className='cart-sup'>{cartCount}</span>
                        </Link>
                    </div>
                    {!session ?
                        <>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Link className='login-btn' href="/login"
                                //  onClick={() => signIn()}
                                >
                                    <i class="fas fa-sign-in-alt me-2"></i> Login
                                </Link>
                                <Link className='register-btn' href="/register">
                                    <i class="fas fa-user me-2"></i> Register
                                </Link>
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
                    <div style={{ width: "50px" }}>
                        <Menu
                            customBurgerIcon={<CustomBurgerIcon />}
                            right
                            isOpen={isOpen}
                            onStateChange={handleMenuStateChange}
                        >
                            <Sidebar setIsOpen={setIsOpen} />
                        </Menu>
                    </div>

                </div>
            </section>

            {router.pathname !== "/" && router.pathname !== "/login" && router.pathname !== "/register" && router.pathname !== "/404" && (
                <section className="page-title">
                    <div className="ani-1">
                        <Image
                            src="/images/page-banner-start.svg"
                            alt="asd"
                            className="ani-pl"
                            width={100}
                            height={100}
                        />
                        <Image
                            src="/images/1.svg"
                            alt="asd"
                            className="ani-pl2"
                            width={100}
                            height={100}
                        />
                        <Image
                            src="/images/3.svg"
                            alt="asd"
                            className="ani-pl3"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-outer">
                                    <h1>{bannerTitle}</h1>
                                    <ul className="page-breadcrumb">
                                        <li>
                                            <Link href="/" exact={true}>
                                                Home
                                            </Link>
                                        </li>
                                        <li>{bannerTitle}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

        </>
    )
}

export default Header
