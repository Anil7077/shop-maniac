import React from 'react'

const Banner = () => {
    return (
        <>
            <section id="hero" style={{backgroundImage: 'url(/images/hero4.png)'}}>
                <h4>Trade-in-fair</h4>
                <h2>Super value deals</h2>
                <h1>On all Products</h1>
                <p className='discount-para'>Save more with coupons and up to 70% off!</p>
                <button>Shop Now</button>
            </section>

        </>
    )
}

export default Banner
