import React, { useEffect } from 'react';
import { useState } from 'react';
import getdata from '../../Functions/getData';
import { Menkids } from '../../Constants/constant';
import Productcard from '../Productcard/Productcard';
import "../../style/productlistpage.css"
function Boysclothes(props) {
  let [product,setProduct] = useState([]);
   async function callerFunction(){
       let data = await getdata(Menkids);
        console.log(data);
        setProduct(data);
   }

//    once the page loads the data is fetched from JSON server 
//    callerFunction calls the getdata function with respective url
   useEffect(()=>{
    callerFunction();
   },[])

    return (
        <div className='productshow'>
            {/* All product elements are looped through the product array */}
            {product.length > 0 ? product.map((Product_elem)=>{return <Productcard {...Product_elem} Key={Product_elem.id}/>}):<p>Empty</p>}

        </div>
    );
}

export default Boysclothes;