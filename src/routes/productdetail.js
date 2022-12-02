import React, { useEffect } from 'react';
import {  myStore } from '../reduxstore/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import "../style/productdetails.css"
import {getImageurl} from "../Functions/getImageurl";
import { OfferPercent } from '../Functions/OfferPercent';
import { clublogobig } from '../Constants/constant';
import { Heading } from '@chakra-ui/react';
import { Button, Stack, Box, ButtonGroup } from '@chakra-ui/react';
function Productdetail(props) {
    let clickeddata = useSelector((myStore)=> {return  myStore.pageclicked})
        let [currentProduct,setCurrentProduct] = useState(clickeddata);
        let [sideState,setSideState] = useState([]);
        let [showImage,setShowImage] = useState(currentProduct.image)
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
            <div style={{width:"80%",margin:"auto"}} className="leftrightcontainer"> 
                <div className='leftside'>
                <div style={{marginRight:"20px"}}>
                    {/* {sideState?.forEach((element)=>{
                        return element;
                    })} */}
                    <div className='smallimgcontainer' style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 0 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,1)} onMouseOver={()=>{setShowImage(getImageurl(currentProduct.image,1))}}></img></div>
                    <div className='smallimgcontainer' style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 1 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,2)} onMouseOver={()=>{setShowImage(getImageurl(currentProduct.image,2))}}></img></div>
                    <div className='smallimgcontainer' style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 2 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,3)} onMouseOver={()=>{setShowImage(getImageurl(currentProduct.image,3))}}></img></div>
                    <div className='smallimgcontainer' style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 3 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,4)} onMouseOver={()=>{setShowImage(getImageurl(currentProduct.image,4))}}></img></div>
                    
                </div>
                 <div> 
                    <img src={showImage}/>
                    
                    </div>
                   
                </div>
                <div className='rightside'>
                     <div className='productInfo'>
                        <h1 className='producttitle'> 
                               {currentProduct.title}
                        </h1>
                        {/* <Heading as='h4' size='md'>
                        {currentProduct.title}
                        </Heading>  */}
                        {
                            currentProduct.hasOwnProperty("description") ? <p>${currentProduct.description}</p>:<p></p> 
                        }
                        <p>Product ID:</p>
                     </div>
                     <div style={{minHeight:"15px"}}></div>
                     <div style={{minHeight:"15px"}}></div>
                     <div className='pricedetails'> 
                          <span> {"$" +currentProduct.price}</span>
                          <span className='productmrp'> {"MRP: $" + currentProduct.mrp}</span>
                          <span className='productoffer'>{"(" + OfferPercent(+currentProduct.mrp, +currentProduct.price)+"% OFF)"}</span>
                          <span className=''> Earn Loyalty Cash</span>
                          <p className='mrpinfo'>MRP incl. all taxes, Add'l charges may apply on discounted price</p>
                     </div>
                     <div>
                     <div style={{display:"flex",alignItems:"center"}} className='clubcontainer'> 
                        <img src={clublogobig} style={{width:"30px",height:"30px"}}></img>
                        <div >
                            <p>Save { Math.round(0.025 * +currentProduct.price)} with Club</p>
                            <h3>Club Price: {Math.round(+currentProduct.price - 0.025 * +currentProduct.price)}</h3>
                        </div>
                     </div>
                     <div className='colorbox'>
                          <h3>COLOR</h3> <div className='outercolorshow' style={{border:"2px solid #"+currentProduct.color }}> <div className='colorshow' style={{backgroundColor:"#"+currentProduct.color }}></div> </div>
                     </div>
                     <Stack spacing={1} direction='row' align='center'>
                        <h1>SIZE</h1>
                    <Button colorScheme='gray' variant='outline' size='sm'>
                          3-6M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='sm'>
                          6-9M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='sm'>
                          9-12M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='sm'>
                          12-18M
                    </Button>
                    <Button colorScheme='gray' variant='outline'   size='sm'>
                          18-24M
                    </Button>
                </Stack>
                   </div>
                   <hr style={{marginTop:"30px"}}/>
                  <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2420/2420231.png" style={{width:"40px"}}></img>
                    <h2> BEST OFFERS</h2>
                  </div>
                  <div>
                     <div>
                        <div></div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                     </div>
                  </div>   
                     
                </div>
            </div>
            
        </div>
    );
}

export default Productdetail;