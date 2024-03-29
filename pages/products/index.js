import LeftBar from '@/components/Products/LeftBar'
import ProductList from '@/components/Products/ProductList'
import getData from '@/utils/ApiCalls'
import React, { useEffect, useState } from 'react'

const index = ({setBannerTitle}) => {
    setBannerTitle("Products")
    const [category, setCategory] = useState()
    const [products, setProducts] = useState()
        const {data, loading, error} = getData('https://fakestoreapi.com/products')
        useEffect(() => {
            if(data){
                setProducts(data)
            }
        },[data])
        console.log(data);
       
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-3 '>
                        <LeftBar setCategory={setCategory} category={category} setProducts={setProducts}/>
                    </div>
                    <div className='col-lg-9'>
                        <ProductList products={products} loadingtime={loading} setProducts={setProducts} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
 
