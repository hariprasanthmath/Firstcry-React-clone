import React from "react";

import {
   FaFacebookF,
   FaTwitter,
   FaInstagram,
   FaYoutube,
   FaLinkedinIn,
} from "react-icons/fa";
import { Box,Button,Grid,GridItem,Image,Img,Input,Stack,Tab,TabList,TabPanel,TabPanels,Tabs,Text } from "@chakra-ui/react";
import emailjs from 'emailjs-com'
import { useState } from "react";

const initState={
   user_email:""
}

const Footer = () => {
   const [email,setMail]=useState(initState);

    console.log(email);

    return (
        <Box>
           <Box bg='orange' padding={2} >
              <Text w={{sm:'95%',md:'70%',lg:'70%' }} margin='auto' textAlign='center' fontSize='20px' color='white' padding={2}  >
             big store for little ones
              </Text>
           </Box>
           <Box  bg='rgb(135,206,250)' p={{ base:'4',sm:'4',md:'10', lg:'10' }} display={ { base:'block',sm:'block',md:'block',lg:'flex' } }gap={10} width='100%' >
              <Box width={{ base:'100%', sm:'100%', md:'50%' ,lg:"30%" }} >
                    <Image width='70%' src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"></Image>
                   <Image padding={4} src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp"></Image>
                   <Box mt={4} position='relative' >
                   </ Box>
              </Box>
              <Grid mt={4} display={{base:'none',sm:'none' , md:'grid', lg:'grid' }} templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)' , md:'repeat(5, 1fr)',lg:'repeat(5, 1fr)'}} gap={6}>
                 <GridItem >
                    <Text textAlign='left'  fontWeight='bold'>CATEGORIES</Text>
                    <Box mt={4} borderRight='1px solid' borderColor='lightgrey' textAlign='left' >
                       <Stack>
                       <Text>Clothing & Fashion</Text>   
                       <Text>Toys</Text>            
                       <Text>Books & CDs</Text>
                       <Text>School supplies</Text>
                       <Text>Birthday Party Supplies</Text>
                       <Text>Bath & Skin care</Text>
                       <Text>Baby Gear</Text>
                       <Text>Nursery</Text>
                        <Text>Moms & Maternity</Text>
                        <Text>Gifts</Text>
                        <Text>Preschool Admissions</Text>
                       </Stack>
                    </Box>
                 </GridItem>
                 <GridItem >
                 <Text textAlign='left'  fontWeight='bold'>FIRST CRY PARENTING</Text>
                    <Box mt={4} borderRight='1px solid ' borderColor='lightgrey' textAlign='left' >
                       <Stack>
                       <Text>Getting Pregnant</Text>
                       <Text>Pregnancy</Text>
                       <Text>Baby</Text>
                       <Text>Toddler</Text>
                       <Text>Big kid</Text>
                       <Text>Vaccination</Text>
                        <Text>Growth Tracker</Text>
                        <Text>Baby Names</Text>
                        <Text>Coloring Pages</Text>
                       </Stack>
                    </Box>
                 </GridItem>
                 <GridItem >
                 <Text textAlign='left'  fontWeight='bold'  >SHIPPING & POLICIES</Text>
                    <Box mt={4} borderRight='1px solid ' borderColor='lightgrey' textAlign='left' >
                     <Stack> 
                    <Text>Payments</Text>
                    <Text>Shipping Policy</Text>   
                    <Text>Cancellation Policy</Text>  
                    <Text>Terms Of Use</Text>
                    <Text>Privacy policy</Text>
                    <Text>Next day & Same day delivery</Text>
                    </Stack>  
                    </Box>
                 </GridItem>
                 <GridItem>
                 <Text textAlign='left' fontWeight='bold' >OUR APPS</Text>
                    <Box mt={4}  borderColor='lightgrey' textAlign='left'>
                     <Stack>
                       <Text>FistCry India: Shopping & Parenting</Text>
                       <Text>FirstCry India: Shopping 
                       & Parenting iOS</Text>
                    </Stack>
                    </Box>
                 </GridItem>
                 <GridItem>
                 <Text textAlign='left' fontWeight='bold' >SHOP INTERNATIONAL</Text>
                    <Box mt={4} borderLeft='1px solid' borderColor='lightgrey' textAlign='left' >
                    <Stack>
                    <Text>FirstCry UAE</Text>
                    <Text>FirstCry KSA</Text>
                    <Text>FirstCry KSA(English)</Text>
                    <Text>FirstCry Arabia: Shopping & Parenting iOS</Text>
                    </Stack>
                    </Box>
                 </GridItem>
              </Grid>
              </Box>
           <Text bg='rgba(135,206,250)' fontWeight='bold' >CONNECT WITH US</Text>
           <Box width='100%'   display='flex' border='1px solid lightgrey' bg='rgba(135,206,250)'>
             <Text padding={3}    ><FaFacebookF fontSize='30px' />  </Text> 
             <Text padding={3}  ><FaTwitter fontSize='30px'  /> </Text> 
             <Text padding={3}  ><FaInstagram fontSize='30px'  /> </Text>
             <Text padding={3}   ><FaYoutube fontSize='30px'  /> </Text> 
             <Text padding={3}   ><FaLinkedinIn fontSize='30px'  /></Text> 
           </Box>
           <Box p={2} display={{ base:'block' , sm:'block', md:'flex' ,lg:'flex'  }} justifyContent='space-between' borderBottom='1px solid lightgrey' width='100%' >
              <Box width={{ base:'100%' , sm:'100%' ,md:'40%', lg:'30%' }} >
                 <Text  textAlign='left' fontWeight='bold'>Download The App</Text>
                 <Box display='flex' >
                   <Img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293" alt="" />
                    <Img  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293"/>
                 </Box>
              </Box>
              
              
                 <Text textAlign='left' fontWeight='bold' >SHOP INTERNATIONAL</Text>
                    <Box borderLeft='1px solid' borderColor='lightgrey' textAlign='left' >
                    <Stack>
                    <Text>FirstCry UAE</Text>
                    <Text>FirstCry KSA</Text>
                    <Text>FirstCry KSA(English)</Text>
                    <Text>FirstCry Arabia: Shopping & Parenting iOS</Text>
                    </Stack>
                    </Box>
                    
                 
              </Box>
           </Box>
          
        
     );
  };
  
  export default Footer;