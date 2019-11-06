import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import Background from './background';
import { Desktop, Mobile } from './responsive';
import Navbar1 from './navbar';
import { Row, Col } from 'reactstrap';
import './dropdown.css';
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
export default class Type extends React.Component{
    constructor(){
        super()
        this.state ={
            Item1 :true,
            Item2 :false,
            Item3 :false,
            Item4 :false,
            Item5 :false,
            actions: [],
            dropDownValue: 'พะยูน',
            dropdownOpen: false
        }
        this.changeState1 = this.changeState1.bind(this);
        this.changeState2 = this.changeState2.bind(this);
        this.changeState3 = this.changeState3.bind(this);
        this.changeState4 = this.changeState4.bind(this);
        this.changeState5 = this.changeState5.bind(this);
        this.toggle = this.toggle.bind(this);
    }  
    toggle(event) {

        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    changeState1(e){
        this.setState({dropDownValue: e.currentTarget.textContent});
        this.setState({Item1:true,Item2:false,Item3:false,Item4:false,Item5:false}); 
    }
    changeState2(e){
        this.setState({Item1:false,Item2:true,Item3:false,Item4:false,Item5:false}); 
        this.setState({dropDownValue: e.currentTarget.textContent});
    }
    changeState3(e){
        this.setState({Item1:false,Item2:false,Item3:true,Item4:false,Item5:false}); 
        this.setState({dropDownValue: e.currentTarget.textContent});
    }
    changeState4(e){
        this.setState({Item1:false,Item2:false,Item3:false,Item4:true,Item5:false});
        this.setState({dropDownValue: e.currentTarget.textContent}); 
    }  
    changeState5(e){
        this.setState({Item1:false,Item2:false,Item3:false,Item4:false,Item5:true}); 
        this.setState({dropDownValue: e.currentTarget.textContent});
    }
    render(){
        const Img1 = styled.img`
        width = 340px;
        `;
        const Img2 = styled.img`
        height = 362px;
        text-align = center;
        `;
        const Text1 = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        margin-left: 3%;
        margin-right: 3%;
        margin-top : 2%;
        padding-left : 3%; 
        padding-right : 3%;
        padding-top :2%;
        padding-bottom :2%;  
        font-weight : medium;
        font-size : 20px;
`;
        const Line = styled.div`
        background-color: #FFD600;
        margin-left: 3%;
        margin-right: 3%;
        margin-top: -1.5%;
        font-size :10px;
        border-radius: 20px;
        color: #FFD600;
        `
        const Imgmol1 = styled.img`
        width: 295px;
`;
        const Textbox = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        margin-left: 3%;
        margin-right: 3%;
        margin-top:1%;
        background-color: white;
        border-radius: 20px;   
        padding : 8%;   
        `;
        const Textbox2 = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        margin-left: 6%;
        margin-right: 6%;
        margin-top:5%;
        background-color: white;
        border-radius: 30px;   
        padding : 8%;   
        
`;
const Text3 = styled.div`
@import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        text-align: center;
`;
        const Title=styled.div`
        font-weight : bolder;
        font-size : 24px;
        text-align :center;
        margin : 3%;
`;
        const Content= styled.div`
        font-weight : bolder;
        font-size: 20px;
        text-align : center;
        margin : 3%;
        `;
        const Content2 = styled.p`
        color:#7b7b7b;
        font-weight : medium;
        font-size : 16px;
        text-align :center;
        `;

       return(
           <div>
            <Background/>
            <Navbar1 name="TYPE"/>
            <Desktop>
            <Text1>
            <Row>
                <Col md = "auto">
                    <div onClick = {this.changeState1}>
                        <Img1 src = "/img/type1s.png" style={{display: this.state.Item1 ?'block' :'none'}}/>
                        <Img1 src = "/img/type1.png" style={{display: this.state.Item1 ?'none' :'block'}}/>
                    </div>
                    <div onClick = {this.changeState2}>
                        <Img1 src = "/img/type2s.png" style={{display: this.state.Item2 ?'block' :'none'}}/>
                        <Img1 src = "/img/type2.png"style={{display: this.state.Item2 ?'none' :'block'}}/>
                    </div>
                    <div onClick = {this.changeState3}>
                        <Img1 src = "/img/type3s.png" style={{display: this.state.Item3 ?'block' :'none'}}/>
                        <Img1 src = "/img/type3.png"style={{display: this.state.Item3 ?'none' :'block'}}/>
                    </div>
                    <div onClick = {this.changeState4}>
                        <Img1 src = "/img/type4s.png" style={{display: this.state.Item4 ?'block' :'none'}}/>
                        <Img1 src = "/img/type4.png"style={{display: this.state.Item4 ?'none' :'block'}}/>
                    </div>
                    <div onClick = {this.changeState5}>
                        <Img1 src = "/img/type5s.png" style={{display: this.state.Item5 ?'block' :'none'}}/>
                        <Img1 src = "/img/type5.png"style={{display: this.state.Item5 ?'none' :'block'}}/>
                    </div>
                </Col>
                <Col>
                    <Textbox style={{display: this.state.Item1 ?'block' :'none'}}>
                    <center><img src= "/img/type_1.jpg" height ="362px"/></center>
                    <Title>พะยูน</Title>
                    <Content>(พบในประเทศไทย) : Dugong Dugon (20,1776) กระจายพันธุ์ในบริเวณชายฝั่งที่มีแนวหญ้าทะเล ในทะเลเขตร้อน และทะเลเขตกึ่งร้อนแถบมหาสมุทรอินเดีย และมหาสมุทรแปซิฟิก</Content>
                    </Textbox>
                    <Textbox style={{display: this.state.Item2 ?'block' :'none'}}>
                    <center><img src= "/img/type_2.jpg" height ="362px"/></center>
                    <Title>วัวทะเลสเตลเลอร์</Title>
                    <Content>Dugong Dugon (Muller,1776) Steller,sea cow
กระจายพันธุ์บริเวนเขตอบอุ่นกึ่งหนาวถึงบริเวณเขตกึ่งขั้วโลก บริเวณช่องแคบแบร่ิง ซึ่งอยู่ระหว่างประเทศสหรัฐอเมริกาและสหภาพโซเวียต 
สูญพันธุ์ไปแล้วเมื่อปี 2311 จากการล่าของมนุษย์ Nishi waki and Mash,1985</Content>
                    </Textbox>
                    <Textbox style={{display: this.state.Item3 ?'block' :'none'}}>
                    <center><img src= "/img/type_3.jpg" height ="362px"/></center>
                    <Title>มานาตีแอฟฟริกาตะวันตก</Title>
                    <Content>Trichechus senegalensis (Link,1795) 
กระจายพันธุ์อยู่บริเวณชายฝั่ง
ทะเลน้ำกร่อยและน้ำจืดในประเทศเซเนกัล ขึ้นไปถึงตอนใต้ของประเทศแองโกลา ซึ่งอยู่ทางทิศตะวันตกของทวีปแอฟริกา </Content>
                    </Textbox>
                    <Textbox style={{display: this.state.Item4 ?'block' :'none'}}>
                    <center><img src= "/img/type_4.jpg" height ="362px"/></center>
                    <Title>มานาตีอเมซอน</Title>
                    <Content>Trichechus senegalensis (Natterer,1883)
กระจายพันธุ์อยู่บริเวณชายฝั่งทะเลน้ำกร่อย และน้ำจืด ในประเทศเซเนกัล ขึ้นไปถึงตอนใต้ของประเทสแองโกลา ซึ่งอยู่ทางทิศตะวันตกของทวีปแอฟริกา </Content>
                    </Textbox>
                    <Textbox style={{display: this.state.Item5 ?'block' :'none'}}>
                    <center><img src= "/img/type_5.jpg" height ="362px"/></center>
                    <Title>มานาตีอินเดียตะวันตก</Title>
                    <Content>Trichechus senegalensis (Linnarus,1758)
กระจายพันธุ์บริเวณชายฝั่ง น้ำกร่อย และเเม่น้ำในฟลอริดา ทะเลแคริบเบียน ถึงตอนเหนือของทวีปอเมริกาใต้</Content>    
                    </Textbox>
                    <Line>d</Line>
                </Col>
            </Row>
            </Text1>
            </Desktop>
            <Mobile>
            <center><Imgmol1 src ="/img/type.png"/></center>
            <Text3>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
      <DropdownToggle color ="yel" caret>
        {this.state.dropDownValue}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><div onClick ={this.changeState1}>พะยูน</div></DropdownItem>
        <DropdownItem><div onClick ={this.changeState2}>วัวทะเลสเตลเลอร์</div></DropdownItem>
        <DropdownItem><div onClick ={this.changeState3}>มานาตีแอฟฟริกาตะวันตก</div></DropdownItem>
        <DropdownItem><div onClick ={this.changeState4}>มานาตีอเมซอน</div></DropdownItem>
        <DropdownItem><div onClick ={this.changeState5}>มานาตีอินเดียตะวันตก</div></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
            </Text3>
            <Textbox2 style={{display: this.state.Item1 ?'block' :'none'}}>
                    <center><img src= "/img/type_1.jpg" width = "235px"/></center>
                    <Title>พะยูน</Title>
                    <Content2>(พบในประเทศไทย) : Dugong Dugon (20,1776) กระจายพันธุ์ในบริเวณชายฝั่งที่มีแนวหญ้าทะเล ในทะเลเขตร้อน และทะเลเขตกึ่งร้อนแถบมหาสมุทรอินเดีย และมหาสมุทรแปซิฟิก</Content2>
                    </Textbox2>
                    <Textbox2 style={{display: this.state.Item2 ?'block' :'none'}}>
                    <center><img src= "/img/type_2.jpg" width = "235px"/></center>
                    <Title>วัวทะเลสเตลเลอร์</Title>
                    <Content2>Dugong Dugon (Muller,1776) Steller,sea cow
กระจายพันธุ์บริเวนเขตอบอุ่นกึ่งหนาวถึงบริเวณเขตกึ่งขั้วโลก บริเวณช่องแคบแบร่ิง ซึ่งอยู่ระหว่างประเทศสหรัฐอเมริกาและสหภาพโซเวียต 
สูญพันธุ์ไปแล้วเมื่อปี 2311 จากการล่าของมนุษย์ Nishi waki and Mash,1985</Content2>
                    </Textbox2>
                    <Textbox2 style={{display: this.state.Item3 ?'block' :'none'}}>
                    <center><img src= "/img/type_3.jpg" width = "235px"/></center>
                    <Title>มานาตีแอฟฟริกาตะวันตก</Title>
                    <Content2>Trichechus senegalensis (Link,1795) 
กระจายพันธุ์อยู่บริเวณชายฝั่ง
ทะเลน้ำกร่อยและน้ำจืดในประเทศเซเนกัล ขึ้นไปถึงตอนใต้ของประเทศแองโกลา ซึ่งอยู่ทางทิศตะวันตกของทวีปแอฟริกา </Content2>
                    </Textbox2>
                    <Textbox2 style={{display: this.state.Item4 ?'block' :'none'}}>
                    <center><img src= "/img/type_4.jpg" width = "235px"/></center>
                    <Title>มานาตีอเมซอน</Title>
                    <Content2>Trichechus senegalensis (Natterer,1883)
กระจายพันธุ์อยู่บริเวณชายฝั่งทะเลน้ำกร่อย และน้ำจืด ในประเทศเซเนกัล ขึ้นไปถึงตอนใต้ของประเทสแองโกลา ซึ่งอยู่ทางทิศตะวันตกของทวีปแอฟริกา </Content2>
                    </Textbox2>
                    <Textbox2 style={{display: this.state.Item5 ?'block' :'none'}}>
                    <center><img src= "/img/type_5.jpg" width = "235px"/></center>
                    <Title>มานาตีอินเดียตะวันตก</Title>
                    <Content2>Trichechus senegalensis (Linnarus,1758)
กระจายพันธุ์บริเวณชายฝั่ง น้ำกร่อย และเเม่น้ำในฟลอริดา ทะเลแคริบเบียน ถึงตอนเหนือของทวีปอเมริกาใต้</Content2>    
                    </Textbox2>
            </Mobile>
           </div>
       )
    }
}