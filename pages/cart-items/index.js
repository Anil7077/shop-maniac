import CartPage from '@/components/Cart/CartPage'
import { getServerSession } from 'next-auth'
import React from 'react'

const index = ({ setBannerTitle }) => {
  setBannerTitle("Cart-items")
  return (
    <>
      <CartPage />
    </>
  )
}

export default index;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res)

  if (!session) {
    return { redirect: { destination: "/login" } }
  }

  return {
    props: {}
  }
}

