import { useRouter } from 'next/router'
import React from 'react'

const Offers = () => {
    const route = useRouter()
    const handleRoute = () => {
        route.push('/products')
    }
    return (
        <>
            <div>
                <section id="sm-banner" className="section-p1">
                    <div className="banner-box" style={{backgroundImage: 'url(/images/b17.jpg)'}}>
                        <h4>crazy deals</h4>
                        <h2>buy 1 get 1 free</h2>
                        <span>The best classic dress is on sales at cara</span>
                        <button className="btn white" onClick={handleRoute}>Learn More</button>
                    </div>
                    <div className="banner-box banner-box2" style={{backgroundImage: 'url(/images/b10.jpg)'}}>
                        <h4>spring/summer</h4>
                        <h2>upcoming season</h2>
                        <span>The best classic dress is on sales at cara</span>
                        <button className="btn white" onClick={handleRoute}>Collection</button>
                    </div>
                </section>
                <section id="banner3" className="section-p1">
                    <div className="banner-box" onClick={handleRoute} style={{backgroundImage: 'url(/images/b7.jpg)'}}>
                        <h2>SEASONAL SALES</h2>
                        <h3>Winter Collection -50% OFF</h3>
                    </div>
                    <div className="banner-box banner-img2" onClick={handleRoute} style={{backgroundImage: 'url(/images/b4.jpg)'}}>
                        <h2>SEASONAL SALES</h2>
                        <h3>Winter Collection -50% OFF</h3>
                    </div>
                    <div className="banner-box banner-img3" onClick={handleRoute} style={{backgroundImage: 'url(/images/b18.jpg)'}}>
                        <h2>SEASONAL SALES</h2>
                        <h3>Winter Collection -50% OFF</h3>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Offers
