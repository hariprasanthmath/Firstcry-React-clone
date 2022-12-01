import React from 'react';
import { productcardtheme } from './productcardtheme';
import { clublogo } from '../../Constants/constant';
import { Button, Stack, Box, ButtonGroup } from '@chakra-ui/react';
import {storeClickedItem} from '../../reduxstore/action';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import myStore from "../../reduxstore/store";
import { EditCartdata } from '../../reduxstore/action';
function Extracard(props) {
      const dispatch = useDispatch();
      const cartdata = useSelector((myStore)=>{return myStore.cartdata})
      /* handleclick function will store the data in redux cart key value*/
      // It checks wheather the product present or not first
      const handleclick = ()=>{
             var Product_present_cart = false;
             var numberOfCount = 0;
             cartdata.forEach((product)=>{
                  if(product.productDetails.id === props.id){
                        Product_present_cart = true;
                        numberOfCount = product.count;
                  }
             })
             if(Product_present_cart){
                  // action to Edit cart value
                  EditCartdata({productDetails:props,count:numberOfCount+1},dispatch);
             }else{
                  //action to set new product in cart
                  storeClickedItem({productDetails:props,count:1},dispatch);
             }
             
      }
    return (
        <div>
            <div>
                <p style={productcardtheme.price}>$ {props.price}</p>
                <div style={productcardtheme.clubrow}> <img src={clublogo}/> <span>Club Price: $ {+props.price - (+props.price * 0.05)}</span></div>
                <div style={productcardtheme.title}><p>Get it by {"Monday"}</p></div>
                <Stack spacing={1} direction='row' align='center'>
                    <Button colorScheme='gray' variant='outline' size='xs'>
                          3-6M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='xs'>
                          6-9M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='xs'>
                          9-12M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='xs'>
                          12-18M
                    </Button>
                    <Button colorScheme='gray' variant='outline'   size='xs'>
                          18-24M
                    </Button>
                </Stack>
                
                <hr style={{marginTop:"8px"}}/>
                <div  style={{marginTop:"8px",height:"18px",width:"18px",borderRadius:"4px",backgroundColor:"#"+props.color}}></div>
                
                <Box
                   display='flex'
                   alignItems='left'
                   justifyContent='lest'
                    width='100%'
                    py={2}
    
                   bgPosition='center'
                   bgRepeat='no-repeat'
                    mb={2}
                >
                <ButtonGroup gap='1'>
                   <Button colorScheme='orange' size='sm' onClick={handleclick}>Add to cart</Button>
                   <Button colorScheme='gray' variant='outline' size='sm'>Shortlist</Button>
                   </ButtonGroup>
    
  </Box>
        </div>
        </div>
    );
}

export default Extracard;