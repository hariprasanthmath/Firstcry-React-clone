import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Modal } from '@chakra-ui/react';
import { ModalOverlay } from '@chakra-ui/react';
import { ModalContent } from '@chakra-ui/react';
import { ModalHeader } from '@chakra-ui/react';
import { ModalCloseButton } from '@chakra-ui/react';
import { ModalBody } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { ModalFooter } from '@chakra-ui/react';
import { useState } from 'react';
import { loadinggif } from '../../Constants/constant';
import { setUserAddredd } from '../../reduxstore/action';
import { useDispatch } from 'react-redux';
function DeliveryAddressset({text, heading}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading,setIsloading] = useState(false);
    const initialRef = React.useRef(null)
    const stateRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const pincodeRef = React.useRef(null)
    const dispatch = useDispatch();
    const setAddress = ()=>{
        setIsloading(true);
        let addressobj = {
            address :initialRef.current.value ,
            state : stateRef.current.value,
            pincode: pincodeRef.current.value
        }
        console.log({
            address :initialRef.current.value ,
            state : stateRef.current.value,
            pincode: pincodeRef.current.value
        })
        setUserAddredd(addressobj,dispatch);
        setTimeout(()=>{
            setIsloading(false);
            onClose();
        },3000)
    }
    return (
        <div>
            <div style={{display:""}}><Button onClick={onOpen}>{text}</Button></div>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
         {isLoading? <img style={{width:"50px",margin:"auto"}} src={loadinggif}></img>:
         <div>
             <ModalHeader> {heading} Delivery Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input ref={initialRef} placeholder='Ex: door no, street...' />
            </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input ref={stateRef} placeholder='State' />
            </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input ref={pincodeRef} placeholder='Pincode' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={setAddress}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
         </div>
         }
        </ModalContent>
      </Modal>
        </div>
    );
}

export default DeliveryAddressset;