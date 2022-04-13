import React from 'react';
import './Product.css';

const Product = (props) => {
    const { _id,name, picture, price } = props.product;

    // console.log(props.cartFunc);

    return (

        <div className='col-md-6 col-lg-4'>
            <div className="card shadow m-2">
                <img src={picture} className="card-img-top p-3 w-100" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <p className="text-black ms-0 ">Product Price : BDT {price}</p>

                    {/* BUTTON onClick executes function defined in shop.js */}
                    <button className='addToCartBtn' onClick={()=> props.cartFunc(_id)}>Add to Cart</button>
                </div>
            </div>
        </div>



    );
};

export default Product;