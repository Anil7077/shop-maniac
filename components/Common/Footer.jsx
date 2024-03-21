import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        toast.success("Subscribed newsletter successfully");
        reset()
    };
    return (
        <>
            <div>
                <section id="newsletter" className="section-p1">
                    <div className="newstext">
                        <h4>Sign Up for Newsletters</h4>
                        <p>Get Email updates about our latest shop and <span> special offers.</span> </p>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Your email address" name='email' className={errors.email ? "error" : ""}
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        
                                      }
                                })} />
                            <button className="btn normal" type='submit'>Sign Up</button>
                        </form>
                    </div>
                </section>
                <footer className="section-p1">
                    <div className="col">
                        <a href="#"><img className="logo" src="https://i.postimg.cc/x8ncvFjr/logo.png" /></a>
                        <h4>Contact</h4>
                        <p><strong>Address:<strong>349, Olorilogbon street, Onigbogbo Lagos</strong></strong></p><strong><strong>
                            <p><strong>Phone:</strong>+23456876199, +23458903120</p>
                            <p><strong>Hours:</strong>10.00 - 18.00, Mon - Sat</p>
                            <div className="follow">
                                <h4>Follow Us</h4>
                                <div className="icon">
                                    <i className="fab fa-facebook-f" />
                                    <i className="fab fa-instagram" />
                                    <i className="fab fa-twitter" />
                                    <i className="fab fa-youtube" />
                                    <i className="fab fa-pinterest-p" />
                                </div>
                            </div>
                        </strong></strong></div><strong><strong>
                            <div className="sec">
                                <div className="col">
                                    <h4>About</h4>
                                    <Link href="/">Home</Link>
                                    <Link href="/about-us">About Us</Link>
                                    <Link href="/products">Products</Link>
                                    <Link href="/contact-us">Contact us</Link>
                                </div>
                                <div className="col">
                                    <h4>My Account</h4>
                                    <Link href="/login">Log in</Link>
                                    <Link href="/register">Register</Link>
                                </div>
                                <div className="col install">
                                    <h4>Install App</h4>
                                    <p>From App Store or Google Play</p>
                                    <div className="row">
                                        <img src="https://i.postimg.cc/Y2s5mLdR/app.jpg" alt />
                                        <img src="https://i.postimg.cc/7YvyWTS6/play.jpg" alt />
                                    </div>
                                    <p>Secured Payment Gateways</p>
                                    <img src="https://i.postimg.cc/kgfzqVRW/pay.png" alt />
                                </div>
                            </div>
                            <div className="coypright">
                                <p> © 2023 All rights reserved! made by Tunrayo </p>
                            </div>
                        </strong></strong></footer><strong><strong>
                        </strong></strong>
            </div>
            <ToastContainer />

        </>
    )
}

export default Footer
