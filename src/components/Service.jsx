import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Design from '../Design';
import {Carousel, Container, Row, Card, Col } from 'react-bootstrap'
import "./Service.css";
const Service = () => {
  useEffect(()=>{
    Aos.init({
      duration:"1000",
      offset : 200,
  },[]);
  });
  const cardData=[
    {
      id : "1",
      asoUsed:"fade-up",
      title: "Service-1",
      imgSrc: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg",
      text: "we are design all type of Ecommerce website."
    },
    {
      id : "2",
      asoUsed:"fade-down",
      title: "Service-2",
      imgSrc: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg",
      text: "we are design all type of Ecommerce website."
    },
    {
      id : "3",
      asoUsed:"fade-right",
      title: "Service-3",
      imgSrc: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg",
      text: "we are design all type of Ecommerce website."
    },
    {
      id : "4",
      asoUsed:"fade-left",
      title: "Service-4",
      imgSrc: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg",
      text: "we are design all type of Ecommerce website."
    },
    {
      id : "5",
      asoUsed:"zoom-in-down",
      title: "Service-1",
      imgSrc: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg",
      text: "we are design all type of Ecommerce website."
    },
    {
      id : "6",
      asoUsed:"zoom-in-down",
      title: "Service-2",
      imgSrc: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg",
      text: "we are design all type of Ecommerce website."
    },
    {
      id : "7",
      asoUsed:"zoom-out-right",
      title: "Service-3",
      imgSrc: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg",
      text: "we are design all type of Ecommerce website."
    },
    {
      id : "8",
      asoUsed:"zoom-out-left",
      title: "Service-4",
      imgSrc: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg",
      text: "we are design all type of Ecommerce website."
    },
  ];

  const images=[
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "1"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "2"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "3"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "4"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "5"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "6"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "7"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "8"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "9"
    },
    {
      imgs: "https://www.organellefarms.com/web/image/2509-5ff1f45a/DSC_4197.JPG",
      nm: "10"
    },
  ]
  return (<>  
    <div className="BgColor">

      {/* <Row>    
        <Col className="text-center" md={6}>
          <h1>hello</h1>
        </Col>      
        <Col className="text-center" md={6}>
          <h2>world</h2>
        </Col>
      </Row> */}
    </div>
    <Container className="mt-5 colorDark">
        <h2 className="text-center">Our Services</h2>
        <br />
        {cardData.map((card, index) => (
          <Row className="mb-4" key={card.id}>
            <Col
              md={{ span: 6, offset: index % 2 === 0 ? 0 : 6 }}
              className="d-flex justify-content-center"
            >
              <Card
                className="fadeCard"
                style={{ width: '28rem', height: '22rem', margin: "20px" }} // Reduced height
                data-aos={card.asoUsed}
              >
                <Card.Img variant="top" src={card.imgSrc} style={{ height: '15rem', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
    </Container>

      <div className="banner-wrapper app">
        <h1 className="text-center">Our Client</h1>
        <div className="wrapper">
          <div className="images">
            {images.map((img)=>(
              <dvi>
                <img id="clientImage" src={img.imgs} alt={img.nm}></img>
              </dvi>
            ))}
          </div>
          <div className="images">
            {images.map((img)=>(
              <dvi>
                <img id="clientImage" src={img.imgs} alt={img.nm}></img>
              </dvi>
            ))}
          </div>
        </div>
      </div>


      {/* <Container className="mt-5">
        <h2 className="text-center"> Our Services</h2>
        <br></br>
        <Row className="text-center">          
          {cardData.map((card)=>(
            <Col key={card.id} md={6}>
              <Card className="mb-2 fadeCard" data-aos={card.asoUsed}>
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}
    </>
  )
}
export default Service




// import React, { useEffect } from 'react';
// import { Container, Row, Card, Col } from 'react-bootstrap';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import './Service.css';

// const Service = () => {
//   useEffect(() => {
//     Aos.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   const cardData = [
//     {
//       id: '1',
//       asoUsed: 'fade-right',
//       title: 'Service-1',
//       imgSrc: 'https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg',
//       text: 'We design all types of Ecommerce websites.',
//     },
//     {
//       id: '2',
//       asoUsed: 'fade-left',
//       title: 'Service-2',
//       imgSrc: 'https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg',
//       text: 'We design all types of Ecommerce websites.',
//     },
//     {
//       id: '3',
//       asoUsed: 'fade-right',
//       title: 'Service-3',
//       imgSrc: 'https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg',
//       text: 'We design all types of Ecommerce websites.',
//     },
//     {
//       id: '4',
//       asoUsed: 'fade-left',
//       title: 'Service-4',
//       imgSrc: 'https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg',
//       text: 'We design all types of Ecommerce websites.',
//     },
//     {
//       id: '5',
//       asoUsed: 'fade-right',
//       title: 'Service-5',
//       imgSrc: 'https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg',
//       text: 'We design all types of Ecommerce websites.',
//     },
//     {
//       id: '6',
//       asoUsed: 'fade-left',
//       title: 'Service-6',
//       imgSrc: 'https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/service-design.svg',
//       text: 'We design all types of Ecommerce websites.',
//     },
//   ];

//   return (
//     <>
//       <Container className="mt-5">
//         <h2 className="text-center">Our Services</h2>
//         <br />
//         {cardData.map((card, index) => (
//           <Row className="mb-4" key={card.id}>
//             <Col
//               md={{ span: 6, offset: index % 2 === 0 ? 0 : 6 }}
//               className="d-flex justify-content-center"
//             >
//               <Card
//                 className="fadeCard"
//                 style={{ width: '18rem', height: '12rem' }} // Reduced height
//                 data-aos={card.asoUsed}
//               >
//                 <Card.Img variant="top" src={card.imgSrc} style={{ height: '6rem', objectFit: 'contain' }} />
//                 <Card.Body>
//                   <Card.Title>{card.title}</Card.Title>
//                   <Card.Text>{card.text}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         ))}
//       </Container>
//     </>
//   );
// };

// export default Service;



