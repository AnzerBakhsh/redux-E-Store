
// import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartslice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div>
                {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between bg-white mb-5 p-4 rounded font-bold">
                        <img className='h-20' src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price} $</h5>
                        <button
                            className="border-none p-2 bg-red-600 text-white cursor-pointer rounded font-bold"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
