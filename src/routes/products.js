import React from 'react';
import Productcard from '../Components/Productcard/Productcard';
import "../style/productlistpage.css"
function products(props) {
    return (
        <div className='productshow'>
           <Productcard/>
           <Productcard/>
           <Productcard/>
           <Productcard/>
           <Productcard/>
        </div>
    );
}

export default products;