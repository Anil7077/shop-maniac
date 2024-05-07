import { addToCart } from '@/store/slices/newCartSlice'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const [prodDetails, setProdDetail] = useState()
    const { data: session } = useSession()
    const dispatch = useDispatch()
    const router = useRouter()
    const prodId = router.query.prodId
    useEffect(() => {
        const getData = () => {
            try {
                axios.get(`https://fakestoreapi.com/products/${prodId}`).then((response) => {
                    console.log("my data", response.data);
                    setProdDetail(response.data)
                })
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [router])
    const handleCart = () => {
        // console.log(prodDetails);
        const data = {
            prodDetails,
            id: Date.now(),
            quantity: 1
        }
        if (session) {
            dispatch(addToCart(data))
            toast.success("added to cart successfully");
        } else {
            toast.error("You need to login to add product to cart")
        }
    }
    return (
        <>
            <div className="prod-details">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center mb-sm-3">
                        <div className="details-image-box">
                            <img src={prodDetails?.image} alt='aa' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* Right Column */}
                        <div className="right-column">
                            {/* Product Description */}
                            <div className="product-description">
                                <span>{prodDetails?.category}</span>
                                <h1>{prodDetails?.title}</h1>
                                <p>
                                    {prodDetails?.description}
                                </p>
                            </div>
                            {/* Product Configuration */}
                            <div className="product-configuration">
                                {/* Product Color */}
                                <div className="product-color">
                                    <span>Color</span>
                                    <div className="color-choose">
                                        <div>
                                            <input data-image="red" type="radio" id="red" name="color" defaultValue="red" defaultChecked />
                                            <label htmlFor="red"><span /></label>
                                        </div>
                                        <div>
                                            <input data-image="blue" type="radio" id="blue" name="color" defaultValue="blue" />
                                            <label htmlFor="blue"><span /></label>
                                        </div>
                                        <div>
                                            <input data-image="black" type="radio" id="black" name="color" defaultValue="black" />
                                            <label htmlFor="black"><span /></label>
                                        </div>
                                    </div>
                                </div>
                                {/* Cable Configuration */}
                                <div className="cable-config">
                                    <span>Cable configuration</span>
                                    <div className="cable-choose">
                                        <button>Straight</button>
                                        <button>Coiled</button>
                                        <button>Long-coiled</button>
                                    </div>
                                    <a href="#">How to configurate your headphones</a>
                                </div>
                            </div>
                            {/* Product Pricing */}
                            <div className="product-price">
                                <span>{prodDetails?.price}$</span>
                                <a onClick={handleCart} className="cart-btn">Add to cart</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default ProductDetail