import React, { useEffect } from 'react';
import { useState } from 'react';
import getdata from '../../Functions/getData';
import { Menkids } from '../../Constants/constant';
import Productcard from '../Productcard/Productcard';
import "../../style/productlistpage.css"
function Boysclothes(props) {
  let [prod,setProd] = useState([]);
   async function callerFunction(){
       let data = await getdata(Menkids);
        console.log(data);
        setProd(data);
   }
   useEffect(()=>{
    callerFunction();
   },[])

    return (
        <div className='productshow'>
            
            {prod.length > 0 ? prod.map((elem)=>{return <Productcard {...elem} Key={elem.id}/>}):<p>Empty</p>}

        </div>
    );
}

export default Boysclothes;