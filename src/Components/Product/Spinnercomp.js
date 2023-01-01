import React from 'react';
import { Spinner, Box } from '@chakra-ui/react'
function Spinnercomp(props) {
    return (
        <Box width={"100%"}   display={"flex"} flexDirection={"column"}  justifyContent={"center"}>
            <Spinner
            margin="auto"
            marginTop="50px"
            
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
<h2 marginTop="50px">Fetching data from backend</h2>
                </Box>
    );
}

export default Spinnercomp;