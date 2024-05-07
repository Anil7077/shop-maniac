import axios from 'axios'
import React, { useEffect } from 'react'

const LeftBar = ({ setCategory, category, setProducts }) => {
  useEffect(() => {
    const getItemsPerPage = () => {
      // setLoading(true)
      try {
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then((response) => {
          setProducts(response.data)
        })
      } catch (error) {
        console.log(error);
      }
      // finally{
      //     setLoading(false)
      // }
    }
    if (category) getItemsPerPage()
  }, [category])
  return (
    <>
      <div className='left-filter-box'>
        <div>
          <h4>Browse by Categories</h4>
        </div>
        <div className='category-div mt-3'>
          <ul className='category-list'>
            <li onClick={() => setCategory('electronics')}>
              <input type="radio" name='category' id='electronics' />
              electronics</li>
            <li onClick={() => setCategory('jewelery')}>
              <input type="radio" name='category' id='jewl' /> jewelery
            </li>
            <li onClick={() => setCategory("men's clothing")}>
              <input type="radio" name='category' id='mclothes' /> men's clothing
            </li>
            <li onClick={() => setCategory("women's clothing")}>
              <input type="radio" name='category' id='wclothes' />women's clothing
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default LeftBar
