import React from 'react';
import { Box, Heading, HStack,Image, Menu, MenuButton, MenuItem, MenuList, Button, Input } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlHandbag} from 'react-icons/sl'

function LowerNavbar() {
    return (
        <Box>
        <HStack >
      
        <Box>
        <Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} rightIcon={<ChevronDownIcon />}>
          ALL CATEGORIES
        </MenuButton>
        <MenuList>
          <MenuItem>BOY FASHION</MenuItem>
          <MenuItem> GIRL FASHION</MenuItem>
          <MenuItem> FOOTWEAR</MenuItem>
          <MenuItem> TOYS</MenuItem>
          <MenuItem> DIAPERING</MenuItem>
          <MenuItem>  GEAR</MenuItem>
          <MenuItem> FEEDING</MenuItem>
          <MenuItem> BATH </MenuItem>
          <MenuItem>BOUTIQUES</MenuItem>
          <MenuItem>  NURSERY</MenuItem>
          <MenuItem> HEALTH & SAFETY </MenuItem>

        </MenuList>
      </Menu>
        </Box>

        <Box>
        <Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          GIRLS FASHION
        </MenuButton>
        <MenuList>
        <MenuItem><Image width='60%' src="https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_girl_winter_271022.jpg"/>
        </MenuItem>
        <MenuItem>   Sweaters NEW</MenuItem>
          <MenuItem> Thermals NEW</MenuItem>
          <MenuItem>Ethnic Wear</MenuItem>
          <MenuItem>Party Wear NEW</MenuItem>
          <MenuItem>
          Onesies & Rompers</MenuItem>
          <MenuItem>
          Pajamas & Leggings</MenuItem>
          <MenuItem>
          Nightwear</MenuItem>
          <MenuItem>Jumpsuits & Dungarees</MenuItem>
          <MenuItem>Athleisure & Sportswear</MenuItem>
          <MenuItem>Shorts & Skirts</MenuItem>
          <MenuItem> Socks & Tights</MenuItem>

        </MenuList>
      </Menu>
        </Box>


        <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
            FOOT WEAR
        </MenuButton>
        <MenuList>
        <MenuItem><Image width='60%' src="https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_footwear_winter_271022.jpg"/></MenuItem>
          <MenuItem>Casual Shoes</MenuItem>
          <MenuItem>   Sandals</MenuItem>
          <MenuItem>    Booties</MenuItem>
          <MenuItem>Bellies & Peep Toes</MenuItem>
          <MenuItem>Formal & Party Wear</MenuItem>
          <MenuItem> Clogs</MenuItem>

        </MenuList>
      </Menu></Box>
        <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        TOYS
        </MenuButton>
        <MenuList>
          <MenuItem ><Image width='60%'src="https://cdn.fcglcdn.com/brainbees/images/n/desk_menu_toy_07012021.jpg" /></MenuItem>
          <MenuItem>BOARD GAMES</MenuItem>
          <MenuItem>IQ Games</MenuItem>
          <MenuItem>Ludo, Snakes & Ladders</MenuItem>
          <MenuItem>Words, Pictures & Scrabble Games</MenuItem>
          <MenuItem>Playing Cards</MenuItem>
          <MenuItem>Life & Travel Board Games</MenuItem>
          <MenuItem>Animal, Birds & Marine Life Games</MenuItem>
          <MenuItem>Business/Monopoly</MenuItem>
          <MenuItem>Playing Cards</MenuItem>
 </MenuList>
      </Menu></Box>
        <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          DIAPERING
        </MenuButton>
        <MenuList>
       <MenuItem>SHOP BY CATEGORY</MenuItem>
          <MenuItem>Diaper Pants</MenuItem>
          <MenuItem>  Baby Wipes</MenuItem>
          <MenuItem> Cloth Nappies & Accessories</MenuItem>
          <MenuItem>         Diaper Changing Mats</MenuItem>
          <MenuItem>     Diaper Bins & Disposable Bags   </MenuItem>
          <MenuItem>         Potty Chairs & Seats </MenuItem>
          <MenuItem>     Waterproof Nappies </MenuItem>
          <MenuItem>      Swim Diapers  </MenuItem>
          <MenuItem> Diaper Monthly Packs </MenuItem>


        </MenuList>
      </Menu></Box>
        <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} >
          GEAR
        </MenuButton>
        <MenuList>
          <MenuItem>TOP BRANDS</MenuItem>
          <MenuItem>Babyhug</MenuItem>
          <MenuItem>Fab n Funky</MenuItem>
          <MenuItem>R for Rabbit</MenuItem>
          <MenuItem>Fisher Price</MenuItem>
          <MenuItem>Chicco</MenuItem> 
          <MenuItem>Graco</MenuItem>
          <MenuItem>Joie</MenuItem>
          <MenuItem>Luv Lap</MenuItem>
          <MenuItem>Mee Mee</MenuItem>
          <MenuItem>Luv Lap</MenuItem>

        </MenuList>
      </Menu></Box>
        <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          FEEDING
        </MenuButton>
        <MenuList>
       <MenuItem> SHOP BY CATEGORY</MenuItem>
          <MenuItem>Baby Food & Infant Formula</MenuItem>
          <MenuItem>Feeding Bottles & Teats</MenuItem>
          <MenuItem>Breast Feeding</MenuItem>
          <MenuItem>Sippers & Cups</MenuItem>
          <MenuItem>Bibs & Hankies</MenuItem>
          <MenuItem>Kids Foods & Supplements</MenuItem>
          <MenuItem>Dishes & Utensils</MenuItem>
          <MenuItem>Teethers & Pacifiers</MenuItem>
          <MenuItem>Sterilizers & Warmers</MenuItem>
          <MenuItem>Feeding Bottle Cleaning</MenuItem>
          <MenuItem>Kitchen Appliances</MenuItem>


        </MenuList>
      </Menu></Box>
        <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          BATH
        </MenuButton>
        <MenuList>
      <MenuItem>  TOP BRANDS</MenuItem>
          <MenuItem>Babyhug</MenuItem>
          <MenuItem>Sebamed</MenuItem>
          <MenuItem>Himalaya Babycare</MenuItem>
          <MenuItem>Mama Earth</MenuItem>
          <MenuItem>Cetaphil Baby</MenuItem>
          <MenuItem>Chicco</MenuItem>
          <MenuItem>CURATIO</MenuItem>
          <MenuItem>Aveeno Baby</MenuItem>
          <MenuItem>the moms co.</MenuItem>
          <MenuItem>Mee Mee</MenuItem>

        </MenuList>
      </Menu></Box>
        <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          NURSERY
        </MenuButton>
        <MenuList>
  <MenuItem>    KIDS ROOM & STUDY ESS.</MenuItem>
          <MenuItem>Kids Beds</MenuItem>
          <MenuItem>Study Tables</MenuItem>
          <MenuItem>Chair</MenuItem>
          <MenuItem>Table & Chair Sets</MenuItem>
          <MenuItem>Activity Tables/Lap Desks</MenuItem>
          <MenuItem>Stools</MenuItem>
          <MenuItem>Bookshelves</MenuItem>
          <MenuItem>Wired & Wireless Headphones</MenuItem>
          <MenuItem>Bluetooth Speakers</MenuItem>
          <MenuItem>Printers</MenuItem>

        </MenuList>
      </Menu>
        
        </Box>
        <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          MOMS
        </MenuButton>
        <MenuList>
    <MenuItem>    WOMEN'S BEAUTY & CARE NEW </MenuItem>
          <MenuItem>Skin & Facial Care</MenuItem>
          <MenuItem>Body Care</MenuItem>
          <MenuItem>Hair Care & Styling</MenuItem>
          <MenuItem>Hair Styling Tools</MenuItem>
          <MenuItem>Bathing Essentials</MenuItem>
          <MenuItem>Lip Care</MenuItem>
          <MenuItem>Sun Protection</MenuItem>
          <MenuItem>Hands & Feet Care</MenuItem>
          <MenuItem>Feminine Hygiene & Care</MenuItem>
          <MenuItem>Kits & Combos</MenuItem>
          <MenuItem>Make up & Cosmetics</MenuItem>
          <MenuItem>Health & Well-being</MenuItem>
          <MenuItem>Super Savers</MenuItem>

        </MenuList>
      </Menu></Box>
      <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          HEALTH
        </MenuButton>
        <MenuList>
  <MenuItem>MEDICAL CARE </MenuItem>
          <MenuItem>Cotton Buds, Pads & Balls</MenuItem>
          <MenuItem>Thermometers</MenuItem>
          <MenuItem>Nasal Aspirators & Cleaners</MenuItem>
          <MenuItem>Anti Colic Tummy RollOn</MenuItem>
          <MenuItem>Cold Relief/Nasal Balms & Inhalers</MenuItem>
          <MenuItem>Medicine Droppers</MenuItem>
          <MenuItem>Gripe Water</MenuItem>
          <MenuItem>Humidifiers/De-humidifiers</MenuItem>
          <MenuItem>Vaporizers & Nebulizers</MenuItem>
        
        </MenuList>
      </Menu></Box>
      <Box><Menu>

<MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          BOUTIQUES
        </MenuButton>
        <MenuList>
  <MenuItem>TOP INTERNATIONAL BRANDS</MenuItem>
          <MenuItem>Kookie Kids</MenuItem>
          <MenuItem>Carter's</MenuItem>
          <MenuItem>Mark & Mia</MenuItem>
          <MenuItem>
          UCB</MenuItem>
          <MenuItem>US Polo Ass</MenuItem>
          <MenuItem>PUMA</MenuItem>
          <MenuItem>Tommy Hilfiger</MenuItem>
          <MenuItem>ASICS Kids</MenuItem>
          <MenuItem>JACK & JONES JUNIOR</MenuItem>
        
        </MenuList>
      </Menu></Box>
<Box  bg='rgb(254,221,0)' fontSize="15px">
<Image width='180%' src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" /></Box>

  
       <Box><Menu>
        <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
          CARTER'S
        </MenuButton>
        <MenuList>
   <MenuItem>SHOP BY GENDER</MenuItem>
          <MenuItem>Baby Girl (0-2 years)</MenuItem>
          <MenuItem>Baby Boy (0-2 years)</MenuItem>
          <MenuItem>Girl (2+ years)</MenuItem>
          <MenuItem>Boy (2+ years)</MenuItem>
         
        
        </MenuList>
      </Menu></Box>
      </HStack>
      </Box>
        )
      }

export default  LowerNavbar