import React from 'react';
import './CartItem.css';
import deleteImg from '../../assets/delete.png';
// import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';

const CartItem = (props) => {
    // console.log(props.data);
    const { _id, picture, name } = props.data;
    return (
        <div className='row m-0 cart d-flex align-items-center my-2 p-1 cart-item'>

            {/* PHOTO  */}
            <div className="col-3 ">
                <img className='item-img' src={picture} alt="" />
            </div>

            {/* PRODUCT  NAME */}
            <div className="col-7 p-0 text-start">
                <p className='m-0'>{name}</p>
            </div>

            {/* DETELE BTN  */}
            <div className="col-2">
                {/* <FontAwesomeIcon icon="faCoffee" /> */}
                <img onClick={() => props.removeFromCart(_id)} src={deleteImg} className="img-fluid w-100 delete-btn" alt="" />
            </div>
        </div>
    );
};

export default CartItem;