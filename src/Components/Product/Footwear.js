import React, { useEffect } from 'react';
import { useState } from 'react';
import getdata from '../../Functions/getData';
import { Footwearurl } from '../../Constants/constant';
import Productcard from '../Productcard/Productcard';
import "../../style/productlistpage.css"
import { useSelector } from 'react-redux';
import { myStore } from '../../reduxstore/store';
import { brandproductrenderfilter } from '../../Functions/Brandproductrenderfilter';
import { genderproductrenderfilter } from '../../Functions/Genderrproductrenderfilter';

function Footwear(props) {
    let [product,setProduct] = useState([]);
    async function callerFunction(){
        let data = await getdata(Footwearurl);
         console.log(data);
         setProduct(data);
         setFinalrender(data);
    }
    
    let [finalrender,setFinalrender] = useState([product]);
    const brandfilter = useSelector((myStore)=>{return myStore.brandfilter}); 
    const genderfilter = useSelector((myStore)=>{return myStore.genderfilter}); 
    useEffect(()=>{
        let arrayafterbrandfiltered = brandproductrenderfilter(brandfilter, product);
        let arrayaftergenderfiltered = genderproductrenderfilter(genderfilter, arrayafterbrandfiltered);
        setFinalrender(arrayaftergenderfiltered);
    },[brandfilter,genderfilter])
 
 //    once the page loads the data is fetched from JSON server 
 //    callerFunction calls the getdata function with respective url
    useEffect(()=>{
     callerFunction();
    },[])
    return (
        <div className='productshow'>
        {/* All product elements are looped through the product array */}
        {finalrender.length > 0 ? finalrender.map((Product_elem)=>{return <Productcard {...Product_elem} Key={Product_elem.id}/>}):<p>Empty</p>}

    </div>
    );
}

export default Footwear;