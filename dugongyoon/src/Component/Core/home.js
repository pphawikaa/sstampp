import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import Background from './background';
import Navbar1 from './navbar';
const Payoon = styled.img`
    height : 580px;
`
export default class home extends React.Component{
    render(){
        return(
            <div>
            <Background/>
            <Navbar1 name ="HOME"/>
            <center>
            <Payoon src = "/img/LOGO_web_1.gif" alt="Payoon Image"/>
            </center>
            
            </div>
        )
    }
}