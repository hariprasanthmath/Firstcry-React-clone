import React, { useEffect } from 'react';
import {  myStore } from '../reduxstore/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import "../style/productdetails.css"
import {getImageurl} from "../Functions/getImageurl";
function Productdetail(props) {
    let clickeddata = useSelector((myStore)=> {return  myStore.pageclicked})
        let [currentProduct,setCurrentProduct] = useState(clickeddata);
        let [sideState,setSideState] = useState([]);

        // const getProdbox = ()=>{
        //     for(let imageindex=0;imageindex < +currentProduct.totimg;imageindex++){
        //                 setSideState(sideState.push( <div style={{width:"100px",marginTop:"10px",marginBottom:"10px"}}> <img src={currentProduct.image}></img></div>));     
        //     }
        // }
        // useEffect(()=>{
        //     for(let imageindex=0;imageindex < +currentProduct.totimg;imageindex++){
        //         setSideState(sideState.push( <div style={{width:"100px",marginTop:"10px",marginBottom:"10px"}}> <img src={currentProduct.image}></img></div>));     
        //     }
        // },[])
    return (
        <div>
            <div style={{width:"80%",margin:"auto"}}> 
                <div className='leftside'>
                <div style={{marginRight:"20px"}}>
                    {/* {sideState?.forEach((element)=>{
                        return element;
                    })} */}
                    <div style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 0 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,1)}></img></div>
                    <div style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 1 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,2)}></img></div>
                    <div style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 2 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,3)}></img></div>
                    <div style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 3 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,4)}></img></div>
                    <div style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 4 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,5)}></img></div>
                    
                </div>
                 <div> <img src={currentProduct.image}/></div>
               
                </div>
                <div className='rightside'>

                </div>
            </div>
            
        </div>
    );
}

export default Productdetail;