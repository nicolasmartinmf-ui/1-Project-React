import React from 'react';
import '../style-sheets/Products.css';
function Products(props) {
    return (
        <div className='Product-section'>
            <img
                className='Product-img'
                src={require('../images/product-xiaomi.png')}
                alt='Picture of Xiaomi'/>
            <div className='Product-info'>
                <p className='Product-title'>Xiaomi Redmi Note 10</p>
                <p className='Product-price'>$1299</p>
                <p className='Product-description'>The Xiaomi Redmi Note 10 is a mid-range smartphone that stands out for its 6.43-inch AMOLED display with Full HD+ resolution, offering vivid colors and good contrast. It is equipped with a Snapdragon 678 processor, accompanied by options of 4 or 6 GB of RAM and internal storage of 64 or 128 GB, expandable via microSD.</p>
            </div>

        </div>
    );
}
export default Products;