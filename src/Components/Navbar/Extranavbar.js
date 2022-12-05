import React from 'react';
import "../../style/Extranavbar.css"
import { Input } from '@chakra-ui/react'
function Extranavbar(props) {
    return (
        <div style={{width:"80%"}} className="allcontainer">
            <div className='leftsidecontnav'>
                <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"></img>
                <div style={{marginLeft:"20px"}}>  <Input variant='outline' size="sm" placeholder='Search Category' /></div>
            </div>
            <div className='rightsidecontnav'>
                  <p>Stores & Preschools  |</p>
                  <p>Support | </p>
                  <p>Track Order | </p>
                  <p>FirstCry Parenting | </p>
                  <p>My Account | </p>
                  <p>Shortlist</p>
            </div>
           
        </div>
    );
}

export default Extranavbar;
