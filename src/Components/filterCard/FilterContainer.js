import React, { useEffect } from 'react';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { AddGlobalbrandfilterstate } from '../../reduxstore/action';
import { useDispatch, useSelector } from 'react-redux';
// import {useSelector} from 'react-redux';
function FilterContainer(props) {
    const dispatch = useDispatch();
    const brandfilterstore = useSelector((myStore)=>{return myStore.brandfilter})
     const [filterState, setFilterState] = useState([]);
    
    // useEffect(()=>{
    //      AddGlobalbrandfilterstate(filterState,dispatch)
    // },[filterState])
   const filtermanager = (e)=>{
    AddGlobalbrandfilterstate(e.target.value,dispatch)
    //   console.log(e.target.value);
    
   }
    return (
        <div >
            <Stack spacing={[1]} direction={['column']} onChange={(e)=>filtermanager(e)}>
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
        </div>
    );
}

export default FilterContainer;