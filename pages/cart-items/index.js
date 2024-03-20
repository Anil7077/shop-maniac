import CartPage from '@/components/Cart/CartPage'
import React from 'react'

const index = ({setBannerTitle}) => {
  setBannerTitle("Cart-items")
  return (
    <>
      <CartPage />
    </>
  )
}

export default index;

