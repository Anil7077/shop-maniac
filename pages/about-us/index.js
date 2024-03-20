import AboutUs from '@/components/AboutUs/AboutUs'
import React from 'react'

const index = ({setBannerTitle}) => {
  setBannerTitle("About-us")
  return (
    <>
      <AboutUs />
    </>
  )
}

export default index
