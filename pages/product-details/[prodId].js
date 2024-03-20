import ProductDetail from '@/components/ProductDetails/ProductDetail'
import React from 'react'

const ProdDetails = ({setBannerTitle}) => {
    setBannerTitle("Product-details")
    return (
        <>
            <div className='container my-5'>
                <ProductDetail />
            </div>
        </>
    )
}

export default ProdDetails