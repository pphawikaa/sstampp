import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import Background from './background';
import Navbar1 from './navbar';
import { Desktop, Mobile } from './responsive'
import {Col,Row} from 'reactstrap';
const Text1 = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        margin-left: 6%;
        margin-right: 6%;
        margin-top : 2%;
        background-color: white;
        border-radius: 30px;   
        padding-left : 3%; 
        padding-right : 3%;
        padding-top :2%;
        padding-bottom :2%;  
        font-weight : medium;
        font-size : 20px;
`;
const Text2 = styled.div`
        padding : 2%;
`;
const Title=styled.div`
        font-weight : bolder;
        font-size : 24px;
        margin-bottom :1%;
`;
const Img1 = styled.div`
        text-align:center;
`;
const Imgmol1 = styled.img`
        width: 295px;
`;
const Content = styled.p`
        
        font-weight : medium;
        font-size : 20px;
`
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
const Title1=styled.div`
        font-weight : bolder;
        font-size : 24px;
        text-align :center;
        margin : 3%;
`;

const Content1 = styled.p`
        color:#7b7b7b;
        font-weight : medium;
        font-size : 16px;
        padding-top : 5%;
`
const Content2 = styled.p`
        color:#7b7b7b;
        font-weight : medium;
        font-size : 16px;
        padding-top : 5%;
        text-align : center;
`
export default class Bio extends React.Component{
    render(){
       return(
           <div>
            <Background/>
            <Navbar1 name="BIOLOGY"/>
            <Desktop>
            <Text1>
                <Row>
                <Col md = "auto">
                <img src ="/img/behavior.jpg" height = "163px"/></Col>
                <Col>
                <Text2>
                <Title>พฤติกรรมและที่อาศัย</Title>
                <Content>
                พะยูน เป็นสัตว์ที่ตกใจง่าย ดำน้ำได้ลึก 39 เมตร ส่วนใหญ่จะดำน้ำในระดับ 10 เมตร<br/>
                พะยูน ต้องขึ้นมาหายใจบ่อยๆ ทุกๆ 2-3 นาที สามารถว่ายน้ำเร็ว 1.8-2.2 กม./ชม.<br/>
                พะยูน จะอาศัยอยู่ในบริเวณชายฝั่งที่มีแนวหญ้าทะเลในทะเลเขตร้อนและทะเลเขตกึ่งร้อน<br/>
                </Content>
                </Text2>
                </Col>
                </Row>
            </Text1>
            <Text1>
                <Row>
                <Col md = "auto">
                <img src ="/img/food.jpg" height = "163px"/></Col>
                <Col>
                <Text2>
                <Title>อาหาร</Title>
                <Content>
                อาหารของพะยูน ได้แก่ หญ้าทะเลชนิตต่างๆ ประมาณ 12 ชนิด พะยูนใช้ชีวิตส่วนใหญ่กับการกินอาหาร และอาศัยอยู่ใกล้ ๆ บริเวณี่มีหญ้าทะเลอุดมสมบูรณ์ สามารถกินอาหารได้ตลอดเวลาทั้งกลางวันและกลางคืน เนื่องจากการมองเห็นของพะยูนไม่ชัดเจนจึงจะใช้การดมกลิ่น เพื่อหาอาหารและใช้หนวดในการสัมผัสสิ่งรอบๆตัว
                </Content>
                </Text2>
                </Col>
                </Row>
            </Text1>
            <Text1>
                <Row>
                <Col md = "auto">
                <img src ="/img/reproduce.jpg" height = "163px"/></Col>
                <Col>
                <Text2>
                <Title>การสืบพันธุ์</Title>
                <Content>
                พะยูนจะเข้าสู่วัยเจริญพันธุ์ประมาณอายุ 9-10 ปี ส่วนพะยูนตัวเมียตั้งท้องนาน 13-14 เดือน ออกลูกครั้งละ
1 ตัว และทิ้งระยะ 3-7 ปี ลูกพะยูนแรกเกิดมีความยาว 1-1.25 เมตร และน้ำหนักประมาณ 20-35 กิโลกรัม ลูกพะยูนจะอาศัยอยู่กับแม่ตลอดเวลาประมาณ 1-2 ปี
                </Content>
                </Text2>
                </Col>
                </Row>
            </Text1>
            </Desktop>
            <Mobile>
            <Img1>
            <Imgmol1 src ="/img/biology.png"/>
            </Img1>
            <Textbox>
                <Title1>พฤติกรรมและที่อาศัย</Title1>
                <center><img src = "/img/behavior.jpg" width="235px"/></center>
                <Content1>
                - เป็นสัตว์ที่ตกใจง่าย <br/>
                - ดำน้ำได้ลึก 39 เมตร ส่วนใหญ่จะดำน้ำในระดับ 10 เมตร <br/>
                - ต้องขึ้นมาหายใจบ่อยๆ ทุกๆ 2-3 นาที <br/>
                - สามารถว่ายน้ำเร็ว 1.8-2.2 กม./ชม. <br/>
                - จะอาศัยอยู่ในบริเวณชายฝั่งที่มีแนวหญ้าทะเลในทะเลเขตร้อนและทะเลเขตกึ่งร้อน <br/>
                </Content1>
            </Textbox>
            <Textbox>
                <Title1>อาหาร</Title1>
                <center><img src = "/img/food.jpg" width="235px"/></center>
                <Content2>
                อาหารของพะยูน ได้แก่ หญ้าทะเลชนิตต่าง ๆ ประมาณ 12 ชนิด พะยูน ใช้ชีวิตส่วนใหญ่กับการกินอาหาร และอาศัยอยู่ใกล้ๆ บริเวณที่มีหญ้าทะเลอุดมสมบูรณ์ สามารถกินอาหารได้ตลอดเวลาทั้งกลางวัน และกลางคืน เนื่องจากการมองเห็นของพะยูนไม่ชัดเจน จึงจะใช้การดมกลิ่นเพื่อหาอาหาร และใช้หนวดในการสัมผัสสิ่งรอบๆ ตัว
                </Content2>
            </Textbox>
            <Textbox>
                <Title1>การสืบพันธุ์</Title1>
                <center><img src = "/img/reproduce.jpg" width="235px"/></center>
                <Content2>
                พะยูนจะเข้าสู่วัยเจริญพันธุ์ประมาณอายุ 9-10 ปี ส่วนพะยูนตัวเมียตั้งท้องนาน 13-14 เดือน ออกลูกครั้งละ 1 ตัวและทิ้งระยะ 3-7 ปี ลูกพะยูน แรกเกิดมีความยาว 1-1.25 เมตร และน้ำหนักประมาณ20-35 กิโลกรัม ลูกพะยูนจะอาศัยอยู่กับแม่ตลอดเวลา ประมาณ 1-2 ปี
                </Content2>
            </Textbox>
            </Mobile>
           </div>
       )
    }
}