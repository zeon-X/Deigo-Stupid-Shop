import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import CartItem from '../cartItem/CartItem';
import './Shop.css';
import Swal from 'sweetalert2';



const Shop = () => {

    // STORING ALL FETCHED  DATA
    const [products, setProducts] = useState([]);

    // DATA FATCHING FROM DB  
    useEffect(() => {
        fetch('db.json')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
    }, [])





    //SHOPPING CART
    const [cartItem, setCartItem] = useState([]);

    //ADD TO CART FUNCTION
    const addToCart = (id) => {
        const flag = cartItem.find(x => x._id === id);

        if (!flag && cartItem.length < 4) {
            //add product to cart
            const item = products.find(x => x._id === id)
            const temCartItem = [...cartItem, item];
            setCartItem(temCartItem);
        }
        else if (!flag && cartItem.length === 4) {
            //cart full
            Swal.fire({
                icon: 'error',
                title: "Opps! Cart Full",
                text: "Can't Add New Product..."
            })
        }
        else {
            //Product Alradey added
            Swal.fire({
                icon: 'warning',
                title: "Oops",
                text: 'Product Alradey Added!'
            })
        }
    }

    //REMOVE FROM CART
    const removeFromCart = (id) => {
        const temCartItem = cartItem.filter(x => x._id !== id);
        setCartItem(temCartItem);
    }


    //CHOOSE ONE BTN FUNCTION
    const chooseRand = () => {
        let length = cartItem.length;
        //CHECK IF THE CART IS EMPTY
        //if empty
        if (length === 0) {
            Swal.fire({
                icon: 'warning',
                title: "Oops",
                text: 'Cart is Empty!'
            })
        }
        //if not empty
        else {
            let randIndex = Math.floor(Math.random() * length);


            // console.log(cartItem[randIndex]);

            Swal.fire({
                title: `Product Matched!`,
                text: `${cartItem[randIndex].name}`,
                imageUrl: `${cartItem[randIndex].picture}`,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        }
    }





    return (
        <div className='row m-0'>


            {/* DISPLAY PRODUCTS  */}
            <div className="col-sm-12 col-lg-9 p-0">
                <div className="row d-flex justify-content-between align-items-start p-0 m-0 mt-3">

                    {
                        products.map(data => {
                            return (
                                <Product cartFunc={addToCart} key={data._id} product={data}></Product>
                            )
                        })
                    }

                </div>
            </div>



            {/* ORDER SUMMARY  */}
            <div className="col-sm-12 col-lg-3 p-0">
                <div className='orderSummary p-4'>

                    {/* HEADINGS  */}
                    <div>
                        <h4 className='p-0 m-0'>Order Summary :</h4>
                        <hr />
                        <p className='text-start text-black m-0'>Add maximum 4 products at a time..</p>
                    </div>

                    {/* CART ITEMS  */}
                    <div className='my-4'>
                        {
                            cartItem.map(x => {
                                return (
                                    <CartItem key={x._id} removeFromCart={removeFromCart} data={x}></CartItem>
                                )
                            })
                        }
                    </div>

                    {/* BUTTONS  */}
                    <div className='buttons'>
                        <button className='mb-3 chooseBtn' onClick={chooseRand}>Choose One</button>
                        <button className='resetBtn' onClick={() => {
                            setCartItem([]);
                        }}>Reset Cart</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Shop;