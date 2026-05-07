import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to={'/Product/Men'}>Men's</Link> {/*for name printing and to ka mtlb h ki kaha leke jana h route ko*/}
        <Link className='text-xl font-semibold' to={'/Product/women'}>Women's</Link>
      </div>
      <h1>Product</h1>
      {/* <a className='h-100px' href="/Product/Men">Men's collection</a> dono sahi kaam krte h par hum log Link he use krte h */}
    </div>
  )
}

export default Product
