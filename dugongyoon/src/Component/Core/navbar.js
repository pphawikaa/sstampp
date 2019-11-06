import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

const Navex1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const x = props.name;
  const Nav1 = styled.div`
    margin-left: 3%;
    margin-right: 3%;
    padding-bottom:2%;
    padding-top:2%;
`;
const Nav2 = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
`
const Text1 = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        
        font-weight : medium;
        font-size : 24px;
        text-align :center;
        color : white;
`;  
const Text3 = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;        
        font-weight : medium;
        font-size : 24px;
        text-align :center;
        color : black;
        text-decoration: underline;
        text-underline-position: under;
        
`; 
    
    function Text2(props){
        if(x==props.value){
            return <Text3>{props.value}</Text3>
        }
        else{
            return <Text1>{props.value}</Text1>
        }
    }
  return (
    <div>
    <Nav1>
      <Navbar light expand="md" >
        <NavbarBrand href="/"><img src = "/img/logoweb.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="/"><Nav2><Text2 value="HOME"/>
                  </Nav2>
                  </NavLink>
              </NavItem>
            <NavItem>
            <NavLink href="/info/" >
                <Nav2><Text2 value="INFO"/></Nav2>
                </NavLink>
            </NavItem>   
            <NavItem>
              <NavLink href="/biology/" >
                  <Nav2><Text2 value="BIOLOGY"/></Nav2></NavLink>
              </NavItem>
            <NavItem>
              <NavLink href="/type/"><Nav2><Text2 value="TYPE"/></Nav2></NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Nav1>
    </div>
  );
}

export default Navex1;