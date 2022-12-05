import React, { useEffect } from 'react';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { AddGlobalbrandfilterstate } from '../../reduxstore/action';
import { AddGlobalgenderfilterstate } from '../../reduxstore/action';
import { useDispatch, useSelector } from 'react-redux';
import { AddGlobalPercentFilter } from '../../reduxstore/action';
import "./Filter.css";
// import {useSelector} from 'react-redux';
function FilterContainer(props) {
    const dispatch = useDispatch();
    // const brandfilterstore = useSelector((myStore)=>{return myStore.brandfilter})
    //  const [filterState, setFilterState] = useState([]);
    
    // useEffect(()=>{
    //      AddGlobalbrandfilterstate(filterState,dispatch)
    // },[filterState])
   const brandfiltermanager = (e)=>{
    AddGlobalbrandfilterstate(e.target.value,dispatch)
    //   console.log(e.target.value);   
   }
   const genderfiltermanager = (e)=>{
    AddGlobalgenderfilterstate(e.target.value,dispatch)
   }
   const discountfiltermanager = (e)=>{
    AddGlobalPercentFilter(e.target.value, dispatch);
   }
    return (
        <div style={{margin:"20px"}}>
            <div  className='brandfilter'>
                <h1 style={{textAlign:"left",padding:"10px 0px 10px 20px",backgroundColor:"#eeeeee",marginBottom:"10px"}}>CATEGORY</h1>
            <Stack spacing={[3]} direction={['column']} onChange={(e)=>brandfiltermanager(e)}>
                   <Checkbox size='md' colorScheme='red' value="Pine Kids" >
                       Pine Kids
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="Anthrilo">
                        Anthrilo
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="Honeyhap">
                        Honeyhap
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="Kookie Kids">
                        Kookie Kids
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="Angel & Rocket">
                       Angel & Rocket
                    </Checkbox>
  
           </Stack>
            </div>
           <div className='brandfilter'>
           <h1 style={{textAlign:"left",padding:"10px 0px 10px 20px",backgroundColor:"#eeeeee",marginBottom:"10px"}}>CATEGORY</h1>
           <Stack spacing={[1]} direction={['column']} onChange={(e)=>genderfiltermanager(e)}>
                   <Checkbox size='md' colorScheme='red' value="Boy" >
                         Boy
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="Girl">
                        Girl
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="Unisex">
                        Unisex
                    </Checkbox>
                   
  
           </Stack>
           </div>
           <div className='brandfilter'>
           <h1 style={{textAlign:"left",padding:"10px 0px 10px 20px",backgroundColor:"#eeeeee",marginBottom:"10px"}}>DISCOUNT</h1>
           <Stack spacing={[1]} direction={['column']} onChange={(e)=>discountfiltermanager(e)}>
                   <Checkbox size='md' colorScheme='red' value="0-10" >
                         Upto 10%
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="10-20">
                        10% - 20%
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="20-30">
                        20% - 30%
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="30-40">
                        30% - 40%
                    </Checkbox>
                    <Checkbox size='md' colorScheme='red' value="40+">
                       More than 40%
                    </Checkbox>
                   
  
           </Stack>
           </div>
        </div>
    );
}

export default FilterContainer;