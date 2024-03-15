import React from 'react'

const LeftBar = ({setCategory}) => {
  return (
    <>
      <div className='left-filter-box'>
        <div>
            <h4>Browse by Categories</h4>
        </div>
        <div className='category-div mt-3'>
            <ul className='category-list'>
                <li onClick={() => setCategory('electronics')}>electronics</li>
                <li onClick={() => setCategory('jewelery')}>jewelery</li>
                <li onClick={() => setCategory("men's clothing")}>men's clothing</li>
                <li onClick={() => setCategory("women's clothing")}>women's clothing</li>
            </ul>
        </div>

      </div>
    </>
  )
}

export default LeftBar
