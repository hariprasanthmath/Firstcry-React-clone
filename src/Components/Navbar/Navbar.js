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
        <Input borderColor='black' />
        </Box>
      
        <Menu>
        <Box fontSize="15px">
          Select location
    
        </Box>
        
      </Menu>
        <Menu>
        <MenuButton fontSize="15px" as={Button}>
          Stores & Preschools
        </MenuButton>
        <MenuList>
          <MenuItem>Find Stores</MenuItem>
          <MenuItem>Find Preschools</MenuItem>
          <MenuItem>Open a Store</MenuItem>
          <MenuItem>Open a Preschool</MenuItem>
         
        </MenuList>
      </Menu>
        
        <Menu>
        <Box fontSize="15px" >
          Support
        </Box>
      
      </Menu>
        <Menu>
        <Box fontSize="15px" >
        Track Order
        </Box>
        
      </Menu>
        <Box><Menu>
        <Box fontSize="15px">
          FirstCry Parenting
        </Box>
        
      </Menu></Box>
        <Box><Menu>
        <Box fontSize="15px">
          Login/Register
        </Box>
       
      </Menu></Box>
        <Box><Menu>
        <Box fontSize={15}>
          Shortlist
        </Box>
        
      </Menu></Box>
        
       
        <Box fontSize={30} height='8%'><SlHandbag /></Box>
        
        </HStack>
        </Box>
        )
      }

export default Navbar