import React, { useEffect } from 'react';
import { useState } from 'react';
import getdata from '../../Functions/getData';
import { Menkids } from '../../Constants/constant';
import Productcard from '../Productcard/Productcard';
import "../../style/productlistpage.css"
import { useSelector } from 'react-redux';
import { myStore } from '../../reduxstore/store';
import { brandproductrenderfilter } from '../../Functions/Brandproductrenderfilter';
import { genderproductrenderfilter } from '../../Functions/Genderrproductrenderfilter';
import { percentproductrenderfilter } from '../../Functions/percentproductrenderfilter';
function Boysclothes(props) {
  let [product,setProduct] = useState([]);
   async function callerFunction(){
       let data = await getdata(Menkids);
        console.log(data);
        setProduct(data);
        setFinalrender(data);
   }
   
   let [finalrender,setFinalrender] = useState([product]);
   const brandfilter = useSelector((myStore)=>{return myStore.brandfilter}); 
   const genderfilter = useSelector((myStore)=>{return myStore.genderfilter}); 
   const percentfilter = useSelector((myStore)=>{return myStore.percentfilter}); 
   useEffect(()=>{
    console.log(percentfilter)
       let arrayafterbrandfiltered = brandproductrenderfilter(brandfilter, product);
       let arrayaftergenderfiltered = genderproductrenderfilter(genderfilter, arrayafterbrandfiltered);
       let arrayafterpercentfiltered = percentproductrenderfilter(percentfilter, arrayaftergenderfiltered);
       setFinalrender(arrayafterpercentfiltered);
   },[brandfilter,genderfilter,percentfilter]);

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

export default Boysclothes;