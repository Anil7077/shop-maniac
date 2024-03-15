import { addToCart } from '@/store/slices/newCartSlice'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProductList = ({ products, setProducts }) => {
    const [sort, setSort] = useState("")
    const [itemPerPage, setItemPerPage] = useState()
    const dispatch = useDispatch()
    const users = useSelector((state) => state)
    console.log(users.newCart.myCart);

    useEffect(() => {
        const getSorted = () => {
            try{
                axios.get(`https://fakestoreapi.com/products?sort=${sort}`).then((response) => {
                    // console.log("my data",response);
                    setProducts(response.data)
                })
            }catch(error){
                console.log(error);
            }
        }
        if(sort !== "") getSorted()
    },[sort])
    useEffect(() => {
        const getItemsPerPage = () => {
            try{
                axios.get(`https://fakestoreapi.com/products?limit=${itemPerPage}`).then((response) => {
                    // console.log("my data",response);
                    setProducts(response.data)
                })
            }catch(error){
                console.log(error);
            }
        }
        if(itemPerPage) getItemsPerPage()
    },[itemPerPage])

    const handleCart = (prodDetails) => {
        console.log(prodDetails);
        const data = {
            prodDetails,
            id: Date.now(),
        }
        dispatch(addToCart(data))
        toast.success("added to cart successfully");
    }
    return (
        <>
            <div className='top-filter-box' >
                <div className='select-fields'>
                    <div>
                        <label htmlFor="">Sort by</label>
                        <select onChange={(e) => setSort(e.target.value)}>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Items per page</label>
                        <select onChange={(e) => setItemPerPage(e.target.value)}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={26}>26</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Sort by</label>
                        <select name="" id="">
                            <option value="">1</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className='product-listing' id='product1'>
                <div className='pro-container'>
                    <div className="row">
                        {products && products.length > 0 &&
                            products.map((item, i) => (
                                <div className="col-lg-4" key={i}>
                                    <div className="pro">
                                        <img src={item.image} alt='img' />
                                        
                                        <div className="des">
                                            <span>adidas</span>
                                            <h5>Carton Leave Tshirts</h5>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <h4>$78</h4>
                                        </div>
                                        <a onClick={() => handleCart(item)}><i className="fal fa-shopping-cart cart" /></a>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default ProductList
