import React from 'react'
import Products from '@/Components/Products'


function Home() {
  return (
    <div>
        <h2 className=' p-6 text-4xl text-center font-bold text-blue-500'>Welcome To Our Store</h2>

        <section>
            <h3 className='font-bold text-center text-xl mb-3'>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home