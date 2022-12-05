import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardBody, Text, CardFooter, Button, Heading } from '@chakra-ui/react';
import DeliveryAddressset from './DeliveryAddressset';
function DeliveryAddressshow(props) {
    let userdata = useSelector((myStore)=> {return myStore.userAddress})
    return (
        <div>
 <Card align='left' gap="1">
  <CardHeader>
    <Heading size='md' align="left">Address </Heading>
  </CardHeader>
  <CardBody>
    <Text noOfLines={1}> {userdata.address} {" ,  "} {userdata.state} {" ,  "} {userdata.pincode}</Text>
  </CardBody>
  
  {/* <CardBody>
    <Text noOfLines={1}>{userdata.pincode}</Text>
  </CardBody> */}
  <CardFooter>
    <DeliveryAddressset text="EDIT" heading=""/>
    
  </CardFooter>
</Card>
            {/* <p>{userdata.address}</p>
            <p>{userdata.state}</p>
            <p>{userdata.pincode}</p> */}
        </div>
    );
}

export default DeliveryAddressshow;