import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner  from "../../assets/banner/fashon 1.jpg";
import "../../pages/About/about.css"
// Mock Data Cards
import News1 from "../../assets/latest News/Latest News2.jpg"
import News2 from "../../assets/latest News/Latest News5.jpg"
import News3 from "../../assets/latest News/Latest News6.jpg"


import img1 from "../../assets/instgram/fashon1.jpg"
import img2 from "../../assets/instgram/fashon 2.jpg"
import img3 from "../../assets/instgram/fashon 3.jpg"
import img4 from "../../assets/instgram/fashon 4.jpg"

import video from "../../assets/instgram/video.mp4"
import img5 from "../../assets/instgram/insta2 slide1.jpg"
import img6 from "../../assets/instgram/insta 3.jpg"
import img7 from "../../assets/instgram/new4.jpg"

import img8 from "../../assets/instgram/yarn0.jpeg"
import img9 from "../../assets/instgram/yarn1.jpg"
import img10 from "../../assets/instgram/yarn3.jpg"
import img11 from "../../assets/instgram/yarn4.jpg"

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>“Design is not just about product. 
                Design is about responsibility.”</h2>
              <p>
              DR CARMEN HIJOSA
              </p>
            </Col>
          </Row>
        </Container>
      </section>
  
         <Container>
        <Row>
          <Col lg={6} >
            <Link to="/responsibility">
            <div className="container3">
              <img src="https://stories.uq.edu.au/the-world-s-favourite-fruit-needs-a-genetic-boost/assets/PlPtblVsFW/banana-gettyimages-pixdeluxe-2560x1875.jpeg" className="image3" alt="Hero" />
              <h1>/Responsibility</h1>
              <h6> The earth and its people are at the heart of whuat we do</h6>
              <p> LEARN MORE </p>
            </div>
            </Link>
          
          </Col>
          <Col lg={6}>
           <Link to="/Faqs">
           <div className="container3">
              <img src="https://www.ananas-anam.com/wp-content/uploads/2022/11/Pinatex_200303_1612-4000x2670.jpg" className="image3" alt="Hero" />
              <h1> FAQs</h1>

             <h6> Have a Question?</h6> 

            <p> We've Got ANSWER </p>
            </div>
           </Link>
          </Col>

          <Col lg={12}>
          <div className="textcontainer">
            <h5 className="centered" >"Bañatex® is one of those rare products of design thinking that hits all the sustainability buttons at once. It brings new income streams to subsistence farmers, allowing them to fully utilise their crops. The implementation of Piñatex® will have far-reaching societal and environmental benefits.”
                
                <p> -----------</p>
                <p> CLARE BRASS  </p>
                <p> DIRECTOR, DEPARTMENT 22</p>
          </h5>
          </div>
          </Col>


          <Col lg={12}>
            <div  className="letest_News" >
              <h1> /Latest News</h1>
             </div>
          </Col>

          <Col sm={2}> </Col>
          <Col sm={3}>
          <Link to="/Faqs">
           <div className="latest_Details">
              <img src={News2} className="latest_Details_image3" alt="Hero" />
             <div className="text_background">
              <p style={{fontWeight:"bold",fontSize:"12px", textAlign:"center", padding:"2px", color:"#868282"}}> 17.01.23</p>
             <h6 style={{fontWeight:"bold",fontSize:"16px", textAlign:"center", padding:"5px", color:"#759c7b", }}> Rhe Banana FAB Shortlisted for green Award</h6> 
            <p  className="text_background1" style={{fontWeight:"bold",fontSize:"10px", padding:"5px", color:"#000000", paddingTop:"10px"  }}>READ MORE </p>
                
             </div>


            </div>
           </Link>
          </Col>
          <Col lg={3}>
            <Link to="/Faqs">
           <div className="latest_Details">
              <img src={News1} className="latest_Details_image3" alt="Hero" />
             <div className="text_background">
              <p style={{fontSize:"12px", textAlign:"center", padding:"2px", color:"#868282"}}> 17.01.23</p>
             <h6 style={{fontWeight:"bold", fontSize:"16px", textAlign:"center", padding:"5px", color:"#522828", }}> Rhe Banana FAB Shortlisted for green Award</h6> 
            <p  className="text_background1" style={{fontWeight:"bold",fontSize:"10px", padding:"5px", color:"#000000", paddingTop:"10px"  }}>READ MORE </p>
                
             </div>


            </div>
           </Link> 
           </Col>
          <Col lg={3}>
          <Link to="/Faqs">
           <div className="latest_Details">
              <img src={News3} className="latest_Details_image3" alt="Hero" />
             <div className="text_background">
              <p style={{fontSize:"12px", textAlign:"center", padding:"2px", color:"#868282"}}> 17.01.23</p>
             <h6 style={{fontWeight:"bold",fontSize:"16px", textAlign:"center", padding:"5px", color:"#a09c9c", }}> Rhe Banana FAB Shortlisted for green Award</h6> 
            <p  className="text_background1" style={{fontWeight:"bold",fontSize:"10px", padding:"5px", color:"#000000", paddingTop:"10px"  }}>READ MORE </p>
                
             </div>


            </div>
           </Link> 
          </Col>

          <Col lg={12}>
            <div  className="letest_News" >
              <button className="View_button"> View All   &rarr; </button>
             </div>
          </Col>
        </Row>
        {/* ------Instagram------- */}

        <Row>
        <Col lg={12}>
            <div  className="letest_News" >
              <h1> /Instagram</h1>
             </div>
          </Col>
          <Col lg={3}> <img src={img1} className="insta" alt="Hero" /></Col>
          <Col lg={3}> <img src={img2} className="insta" alt="Hero" /></Col>
          <Col lg={3}> <img src={img3} className="insta" alt="Hero" /></Col>
          <Col lg={3}> <img src={img4} className="insta" alt="Hero" /></Col>
          <div  className="letest_News" >
              <button className="instgramBtn"> load more   &rarr; </button>
              <button className="followBtn"> follow us on Instagram   &rarr; </button>
         </div>


         <Col lg={3}> 
         <video width="100%"    height= "300px" controls>
          <source src={video} type="video/mp4"/>
          <source src={video} type="video/ogg"/>
            Your browser does not support the video tag.
        </video>

         </Col>
          <Col lg={3}> <img src={img5} className="insta" alt="Hero" /></Col>
          <Col lg={3}> <img src={img6} className="insta" alt="Hero" /></Col>
          <Col lg={3}> <img src={img7} className="insta" alt="Hero" /></Col>
          <div  className="letest_News" >
              <button className="instgramBtn"> load more   &rarr; </button>
              <button className="followBtn"> follow us on Instagram   &rarr; </button>
         </div>


         <Col lg={3}> <img src={img8} className="insta" alt="Hero" /></Col>
          <Col lg={3}> <img src={img9} className="insta" alt="Hero" /></Col>
          <Col lg={3}> <img src={img10} className="insta" alt="Hero" /></Col>
          <Col lg={3}> <img src={img11} className="insta" alt="Hero" /></Col>
          <div  className="letest_News" >
              <button className="instgramBtn"> load more   &rarr; </button>
              <button className="followBtn"> follow us on Instagram   &rarr; </button>
         </div>
        </Row>

      </Container>

    </>
  );
}

export default Section2;
