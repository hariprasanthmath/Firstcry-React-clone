import React from 'react';
import { Box, Heading, HStack,Image, Menu, MenuButton, MenuItem, MenuList, Button, Input } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlHandbag} from 'react-icons/sl'
import { useNavigate } from 'react-router-dom';

function LowerNavbar() {
  let responsiveNav = {
       display: "flex",
       backgroundColor: "rgb(254,221,0)",
       justifyContent: "center",
       flexWrap: "wrap"
  }

  let navigate = useNavigate();
   
  const handleNavigation = (path)=>{
     navigate(path)
  }
    return (
        <div style={responsiveNav}>
          {/* <Box bg='rgb(254,221,0)'> */}
        <div style={{width:"80%"}}>
        <HStack >
      
      <Box>
      <Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} rightIcon={<ChevronDownIcon />}>
        ALL CATEGORIES
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>BOY FASHION</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}> GIRL FASHION</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}> FOOTWEAR</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> TOYS</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> DIAPERING</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>  GEAR</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> FEEDING</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> BATH </MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>BOUTIQUES</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>  NURSERY</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> HEALTH & SAFETY </MenuItem>

      </MenuList>
    </Menu>
      </Box>

      <Box>
      <Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} >
        GIRLS FASHION
      </MenuButton>
      <MenuList>
      <MenuItem><Image width='60%' src="https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_girl_winter_271022.jpg"/>
      </MenuItem>
      <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>   Sweaters NEW</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}> Thermals NEW</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Ethnic Wear</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Party Wear NEW</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>
        Onesies & Rompers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>
        Pajamas & Leggings</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>
        Nightwear</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Jumpsuits & Dungarees</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Athleisure & Sportswear</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Shorts & Skirts</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}> Socks & Tights</MenuItem>

      </MenuList>
    </Menu>
      </Box>


      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} >
          FOOT WEAR
      </MenuButton>
      <MenuList>
      <MenuItem><Image width='60%' src="https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_footwear_winter_271022.jpg"/></MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Casual Shoes</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>   Sandals</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>    Booties</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Bellies & Peep Toes</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Formal & Party Wear</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}> Clogs</MenuItem>

      </MenuList>
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
      TOYS
      </MenuButton>
      <MenuList>
        <MenuItem ><Image width='60%'src="https://cdn.fcglcdn.com/brainbees/images/n/desk_menu_toy_07012021.jpg" /></MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>BOARD GAMES</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>IQ Games</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Ludo, Snakes & Ladders</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Words, Pictures & Scrabble Games</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Playing Cards</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Life & Travel Board Games</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Animal, Birds & Marine Life Games</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Business/Monopoly</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Playing Cards</MenuItem>
</MenuList>
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        DIAPERING
      </MenuButton>
      <MenuList>
     <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>SHOP BY CATEGORY</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Diaper Pants</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>  Baby Wipes</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> Cloth Nappies & Accessories</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>         Diaper Changing Mats</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>     Diaper Bins & Disposable Bags   </MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>         Potty Chairs & Seats </MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>     Waterproof Nappies </MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>      Swim Diapers  </MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> Diaper Monthly Packs </MenuItem>


      </MenuList>
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} >
        GEAR
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>TOP BRANDS</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Babyhug</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Fab n Funky</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>R for Rabbit</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Fisher Price</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Chicco</MenuItem> 
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Graco</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Joie</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Luv Lap</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Mee Mee</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Luv Lap</MenuItem>

      </MenuList>
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        FEEDING
      </MenuButton>
      <MenuList>
     <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}> SHOP BY CATEGORY</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Baby Food & Infant Formula</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Feeding Bottles & Teats</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Breast Feeding</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Sippers & Cups</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Bibs & Hankies</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Kids Foods & Supplements</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Dishes & Utensils</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Teethers & Pacifiers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Sterilizers & Warmers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Feeding Bottle Cleaning</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Kitchen Appliances</MenuItem>


      </MenuList>
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        BATH
      </MenuButton>
      <MenuList>
    <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>   TOP BRANDS</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Babyhug</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Sebamed</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Himalaya Babycare</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Mama Earth</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Cetaphil Baby</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Chicco</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>CURATIO</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Aveeno Baby</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>the moms co.</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Mee Mee</MenuItem>

      </MenuList>
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        NURSERY
      </MenuButton>
      <MenuList>
<MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>    KIDS ROOM & STUDY ESS.</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Kids Beds</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Study Tables</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Chair</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Table & Chair Sets</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Activity Tables/Lap Desks</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Stools</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Bookshelves</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Wired & Wireless Headphones</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Bluetooth Speakers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Printers</MenuItem>

      </MenuList>
    </Menu>
      
      </Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        MOMS
      </MenuButton>
      <MenuList>
  <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>    WOMEN'S BEAUTY & CARE NEW </MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Skin & Facial Care</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Body Care</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Hair Care & Styling</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Hair Styling Tools</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Bathing Essentials</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Lip Care</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Sun Protection</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Hands & Feet Care</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Feminine Hygiene & Care</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Kits & Combos</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Make up & Cosmetics</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Health & Well-being</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Super Savers</MenuItem>

      </MenuList>
    </Menu></Box>
    <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        HEALTH
      </MenuButton>
      <MenuList>
<MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>MEDICAL CARE </MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Cotton Buds, Pads & Balls</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Thermometers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Nasal Aspirators & Cleaners</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Anti Colic Tummy RollOn</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Cold Relief/Nasal Balms & Inhalers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Medicine Droppers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Gripe Water</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Humidifiers/De-humidifiers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Vaporizers & Nebulizers</MenuItem>
      
      </MenuList>
    </Menu></Box>
    <Box><Menu>

<MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        BOUTIQUES
      </MenuButton>
      <MenuList>
<MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>TOP INTERNATIONAL BRANDS</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Kookie Kids</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Carter's</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Mark & Mia</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>
        UCB</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>US Polo Ass</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>PUMA</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Tommy Hilfiger</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>ASICS Kids</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>JACK & JONES JUNIOR</MenuItem>
      
      </MenuList>
    </Menu></Box>
<Box  bg='rgb(254,221,0)' fontSize="15px">
<Image width='180%' src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" /></Box>


     <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        CARTER'S
      </MenuButton>
      <MenuList>
 <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>SHOP BY GENDER</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Baby Girl (0-2 years)</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Baby Boy (0-2 years)</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Girl (2+ years)</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>Boy (2+ years)</MenuItem>
       
      
      </MenuList>
    </Menu></Box>
    </HStack>
        </div>
      {/* </Box> */}
        </div>
        )
      }

export default  LowerNavbar