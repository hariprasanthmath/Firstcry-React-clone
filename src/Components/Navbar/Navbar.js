import React from 'react';
import { Box, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, Button, Input } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import {SlHandbag} from 'react-icons/sl'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'


function Navbar() {
    return (
        <Box bg='#ffffff'>
        <HStack >
        <Box>
        <Heading><img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"/></Heading></Box>
      
        <Box>
        
        <Input borderColor='black'/>
        </Box>
      
        <Menu>
        <Box fontSize="12px" borderRight='1px solid' borderColor='lightgrey' as={Button}>
          Select location
    
        </Box>
        
      </Menu>
        <Menu>
        <MenuButton fontSize="10px" as={Button} borderRight='1px solid' borderColor='lightgrey'>
        Stores & Preschool
        </MenuButton>
        <MenuList>
          <MenuItem>Find Stores</MenuItem>
          <MenuItem>Find Preschools</MenuItem>
          <MenuItem>Open a Store</MenuItem>
          <MenuItem>Open a Preschool</MenuItem>
         
        </MenuList>
      </Menu>
        
        <Menu>
        <Box fontSize="12px"  borderRight='1px solid' borderColor='lightgrey' as={Button}>
          Support
        </Box>
      
      </Menu>
        <Menu>
        <Box fontSize="12px"  borderRight='1px solid' borderColor='lightgrey' as={Button}>
        Track Order
        </Box>
        
      </Menu>
        <Box>
        <Box  fontSize="12px"  borderRight='1px solid' borderColor='lightgrey'as={Button} >
          FirstCry Parenting
        </Box>
        
      </Box>
        <Box>
        <Box fontSize="12px"  borderRight='1px solid' borderColor='lightgrey' as={Button} >
          Login/Register
        </Box>
       
      </Box>
        <Box>
        <Box  fontSize={12} as={Button}><AiOutlineHeart />
          Shortlist
        </Box>
        
      </Box>
        
       
        <Box fontSize={30} height='8%'><SlHandbag /></Box>
       
        </HStack>
        </Box>

        )
      }

export default Navbar