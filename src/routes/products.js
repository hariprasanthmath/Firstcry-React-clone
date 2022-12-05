import React from 'react';
// import Productcard from '../Components/Productcard/Productcard';
import FilterContainer from '../Components/filterCard/FilterContainer';
import {Outlet} from 'react-router-dom'
import "../style/productlistpage.css"
function Products(props) {
    return (
        <div className='productandfiltercontainer' style={{marginTop:"50px"}}>
           <FilterContainer/>
           <div><Outlet/></div>
        </div>
    );
}

export default Products;