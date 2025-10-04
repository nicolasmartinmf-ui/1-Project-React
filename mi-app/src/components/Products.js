import React from 'react';
import '../style-sheets/Products.css';
function Products(props) {
    return (
        <div className='Product-section'>
            <img
                className='Product-img'
                src={require(`../images/product-${props.img}.png`)}
                alt='A smartphone'/>
            <div className='Product-info'>
                <p className='Product-title'> <strong>{props.name} </strong></p>
                <p className='Product-price'><strong>{props.price}</strong></p>
                <p className='Product-description'>{props.description}</p>
            </div>

        </div>
    );
}
export default Products;