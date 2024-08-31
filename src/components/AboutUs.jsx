import React, { useEffect } from 'react'
import { Container,Row,Col, Image, Card } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.jsx';
const AboutUs = () => {
  useEffect(()=>{
    Aos.init({
      duration:"1000",
  })
  })
  const missionData=[
    {
      id:"1",
      effAos:"fade-up",
      title : "Educate",
      text:"Offering friendly and knowledgeable service in physical & virtual stores."
      },{
        id:"2",
        effAos:"fade-up",
        title : "Educate",
        text:"Offering friendly and knowledgeable service in well-merchandised physical & virtual stores."
      },{
        id:"3",
        effAos:"fade-up",
        title : "Educate",
        text:"Offering friendly and knowledgeable service in well-merchandised physical & virtual stores."
      }
  ];
  const Md=missionData.map((data)=>(
    <div key={data.id} data-aos={data.effAos}>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
    </div>
  ));
  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center">About Us</h2>
        <Row>
          <Col md={6}>  
          <Image src="https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG" fluid/>    
          </Col>
          <Col md={6}>
            <p>
              Welcome to Organelle Farms spread over 400+ acres in Odisha, a place where passion
               for farming meets a commitment to ethical and sustainable practices. At Organelle
                Farms, we are dedicated to providing you with the highest quality products while
                 preserving the health of our planet. 
            </p>
            <p>
            At Organelle Farms, sustainability is at the core of everything we do. We implement
             organic farming methods and prioritize environmentally friendly practices to protect
              our land and resources for future generations. By choosing our produce you are not only
               embracing pure flavors but also supporting a more sustainable and responsible food system.
            </p>
          </Col>
        </Row>
      </Container>
      
      <Container className="mt-5">
        <Row >
          <h2 className="text-center">Our Mission</h2>
          <br></br>
          <Col md={4}>
            {Md}
          </Col>
          <Col md={4} className="center-img">
            <Image src="https://www.organellefarms.com/web/image/2586-84b36c6b/digital-art-with-planet-earth%20%282%29.webp" fluid />
          </Col>
          <Col md={4}>
            {Md}
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={6} className="center-img director">
            <Image src="https://www.organellefarms.com/web/image/2731-a07a9134/WhatsApp%20Image%202024-06-24%20at%2011.17.12.webp" fluid />
            <h1 className="text-center">Director</h1>
          </Col>
          <Col md={6} className="center-img director">
            <Image src="https://www.organellefarms.com/web/image/2730-4031a4bc/WhatsApp%20Image%202024-06-24%20at%2011.14.40.webp" fluid />
            <h1 className="text-center">Managing Director</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutUs;