import React from 'react'

function Product({carimg, carname, cardes, carprice}) {
  return (
    <div className='pro-c'>
        <div className="image">
            <img src={carimg} alt="" className='product-image'/>
        </div>
        <div className="title">
            <p className='c-name'>{carname} </p>
            <span className='c-d'>{cardes}</span>
        </div>
        <div className="feat">
            <h3 className='amount'>{carprice}</h3>
            <p className="de">More Details</p>
        </div>
    </div>
  )
}

export default Product