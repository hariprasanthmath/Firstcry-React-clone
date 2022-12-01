import React, { useEffect } from 'react';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { AddGlobalbrandfilterstate } from '../../reduxstore/action';
import { AddGlobalgenderfilterstate } from '../../reduxstore/action';
import { useDispatch, useSelector } from 'react-redux';
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
    return (
        <div >
            <Stack spacing={[1]} direction={['column']} onChange={(e)=>brandfiltermanager(e)}>
                   <Checkbox size='sm' colorScheme='red' value="Pine Kids" >
                       Pine Kids
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='red' value="Anthrilo">
                        Anthrilo
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='red' value="Honeyhap">
                        Honeyhap
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='red' value="Kookie Kids">
                        Kookie Kids
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='red' value="Angel & Rocket">
                       Angel & Rocket
                    </Checkbox>
  
           </Stack>
           <Stack spacing={[1]} direction={['column']} onChange={(e)=>genderfiltermanager(e)}>
                   <Checkbox size='sm' colorScheme='red' value="Boy" >
                         Boy
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='red' value="Girl">
                        Girl
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='red' value="Unisex">
                        Unisex
                    </Checkbox>
                   
  
           </Stack>
        </div>
    );
}

export default FilterContainer;