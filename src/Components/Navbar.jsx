import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className='flex justify-between items-center font-bold mr-3 mt-1'>
      <span className='text-blue-500'>Redux Store</span>
      <div>
        <Link className='ml-6 text-black' to="/">Home</Link>
        <Link className='ml-6 text-black' to="/cart">Cart</Link>
       
        <span className="ml-6">Cart items: {Array.isArray(items) ? items.length : 0}</span>
      </div>
    </div>
  );
}

export default Navbar;
