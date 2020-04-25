import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Product</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Product Name</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Category</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Location</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">remove</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Added to WishList</p>
            </div>
        </div>
    </div>
  )
}