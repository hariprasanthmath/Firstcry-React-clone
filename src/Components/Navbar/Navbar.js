import React from 'react';
import { Box, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, Button, Input } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import {SlHandbag} from 'react-icons/sl'
import {HiOutlineSearch} from 'react-icons/hi'


function Navbar() {
    return (
        <Box>
        <HStack >
        <Box>
        <Heading><img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"/></Heading></Box>
      
        <Box>
        <Input />
        </Box>
      
        <Menu>
        <Box fontSize="12px" width="-moz-fit-content">
          Select location
    
        </Box>
        
      </Menu>
        <Menu>
        <MenuButton fontSize="12px" as={Button}>
          Stores & Preschools
        </MenuButton>
        <MenuList>
          <MenuItem>Find Stores</MenuItem>
          <MenuItem>Find Preschools</MenuItem>
          <MenuItem>Open a Store</MenuItem>
          <MenuItem>Open a Preschool</MenuItem>
         
        </MenuList>
      </Menu>
        
        <Menu><Box>
        <Box fontSize="12px">
          Support
        </Box>
        </Box>
      </Menu>
        <Menu>
        <Box fontSize="12px">
        Track Order
        </Box>
        
      </Menu>
        <Box><Menu>
        <Box fontSize="12px">
          FirstCry Parenting
        </Box>
        
      </Menu></Box>
        <Box><Menu>
        <Box fontSize="12px">
          Login/Register
        </Box>
       
      </Menu></Box>
        <Box><Menu>
        <Box fontSize={12}>
          Shortlist
        </Box>
        
      </Menu></Box>
        
       
        <Box fontSize={30}><SlHandbag /></Box>
        
        </HStack>
        </Box>
        )
      }

export default Navbar