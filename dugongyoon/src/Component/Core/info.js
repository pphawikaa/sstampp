import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import { Desktop, Mobile } from './responsive'
import Background from './background';
import { Row, Col } from 'reactstrap';
import Navbar1 from './navbar';
const Row1 = styled.div`
        margin-left: 6%;
        margin-right: 6%;
        `;
const Img1 = styled.div`
        text-align:center;
`;
const Imgmol1 = styled.img`
        width: 295px;
`;
const Imgmol2 = styled.img`
        width: 167px;
`;

const Text1 = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        margin-left: 1%;
        margin-right: 1%;
        margin-top:5%;
        background-color: white;
        border-radius: 30px;   
        padding : 5%;   
        font-weight : medium;
        font-size : 20px;
        text-align :center;
`;
const TextDiv=styled.div`
    margin-left:2%;
    margin-right:2%;
    margin-top:3%;
`;
const Textbox = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        margin-left: 6%;
        margin-right: 6%;
        margin-top:5%;
        background-color: white;
        border-radius: 30px;   
        padding : 8%;   
        
`;
const Title=styled.div`
        font-weight : bolder;
        font-size : 24px;
        text-align :center;
        margin : 2%;
`;
const Subtitle =styled.p`
        color:#7b7b7b;
        font-weight : bolder;
        font-size : 16px;
        text-align :center;
`
const Content = styled.p`
        color:#7b7b7b;
        font-weight : medium;
        font-size : 16px;
        text-align :center;
`
export default class info extends React.Component{
    
    render(){
        return(
            <div>            
            <Background/>
            <Navbar1 name ="INFO"/>
            <Desktop>
            <Row1>
                <Row>
                <Col md = "auto">
                <Img1>
                <img src ="/img/logo small.png"/>
                </Img1>
                </Col>
                <Col>
                <Text1>พะยูนมีลำตัวรูปกระสวยคล้ายปลาโลมา สีเทาอมชมพูหรือสีน้ำตาลหรือสีน้ำตาลเทา สีของส่วนท้องอ่อนกว่า <br/>วัยเด็กมีลำตัวสีเทาอมชมพูและส่วนท้องสีชมพู ส่วนหัวยาวประกอบด้วยปาก รูจมูก และมีลักษณะคล้ายริมฝีปากที่หนาและขนาดใหญ่เรียกรวมกันว่า MUZZLE มีขนสั้นๆประปรายตลอดลำตัวและขนเส้นใหญ่อยู่อย่างหนาแน่นบริเวณปาก ตาและหูขนาดเล็ก พะยูนหายใจทุกๆ 2-3 นาที มีครีบ (Flipper) มีหัวนม (Nipple) อยู่ด้านหลังของฐานครีบทั้งสองเพศ ในตัวเมียระยะโตเต็มวัยมีหัวนมใหญ่ชัดเจน (ความยาวประมาณ 3-5 เซนติเมตร) ส่วนในตัวผู้หัวนมเป็นเพียงตุ่มเล็กๆ ครีบทั้งสองข้างเปลี่ยนแปลงมาจากขาคู่หน้า ภายในครีบประกอบด้วยนิ้ว 5 นิ้ว ครีบทำหน้าที่ในการเปลี่ยนทิศทางการเคลื่อนที่และช่วยในการขุดหญ้าทะเล พะยูนว่ายน้ำโดยใช้การพัดโบกของครีบหาง</Text1>
                </Col>
                </Row>
            </Row1>
            </Desktop>
            <Mobile>
                <TextDiv>
                <Img1>
                <Imgmol1 src ="/img/info.png"/>
                <Imgmol2 src ="/img/logo small.png"/>
                </Img1>
                <Textbox>
                    <Title>พะยูน</Title>
                    <Content>มีลำตัวรูปกระสวยคล้ายปลาโลมา</Content>
                    <Subtitle>- สี -</Subtitle>
                    <Content>เทาอมชมพู หรือสีน้ำตาล หรือสีน้ำตาลเทา<br/> สีของส่วนท้องอ่อนกว่า วัยเด็ก มีลำตัว<br/>
สีเทาอมชมพู และส่วนท้องสีชมพู</Content>
                    <Subtitle>- ลักษณะ -</Subtitle>
                    <Content><b>ส่วนหัวยาว</b> ประกอบด้วยปาก รูจมูก และมีริมฝีปากที่หนา ขนาดใหญ่
เรียกรวมกันว่า “MUZZLE“ มีขนสั้นๆ ประปรายตลอดลำตัว และขนเส้นใหญ่
อยู่อย่างหนาแน่นบริเวณปาก ตา และหูขนาดเล็ก<br/>
<b>ส่วนของกลางลำตัว</b> มีครีบทั้งสองข้าง ภายในครีบ ประกอบด้วยนิ้ว 5 นิ้ว ครีบทำหน้าที่ในการเปลี่ยนทิศทาง
การเคลื่อนที่ และช่วยในการขุดหญ้าทะเล พะยูนว่ายน้ำโดยใช้การพัดโบก
ของครีบหาง และมีหัวนม อยู่ด้านหลัง
ของฐานครีบทั้งสองเพศ ในตัวเมียระยะโตเต็มวัยมีหัวนมใหญ่
ชัดเจน (ความยาวประมาณ 3-5 cm) ส่วนในตัวผู้หัวนมเป็นเพียงตุ่มเล็กๆ</Content>
                </Textbox>
                </TextDiv>
            </Mobile>
            
            </div>
        )
    }
}