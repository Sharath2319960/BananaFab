import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../assets/banner/Banner1.jpg"
import Banner1 from "../../assets/banner/Banner.jpg"
import Banner2 from "../../assets/banner/fashon 3.jpg"
import "../../styles/HeaderStyle.css";
import "../../pages/About/about.css"


const Section1 = () => {
  return (
    <section >
      <Container>
        <Row>
          <Col lg={6}>
            <Link to="/aboutus">
            <div className="container0">
            <img src={Banner} alt="Avatar" className="image0" />
            <div className="middle0">
                <div className="text0">
    	            <h3>/About us</h3>
                  <h6> Innovative natural Textiles from the Banana plant fibes </h6>
                  <h2> &rarr;</h2>
               </div>
             </div>
          </div>
            </Link>
         
          </Col>
          <Col lg={6}>
            <Link to="/bañayarn">
            <div className="container1">
            <img src={Banner2} alt="Avatar" className="image1" />
            <div className="middle1">
                <div className="text1">
    	            <h3>/Bañayarn</h3>
                  <h6> Working with Nature  </h6>
                  <h2> &rarr;</h2>
               </div>
             </div>
          </div>
            </Link>
         
          <Link to="/buybañatex">
          <div className="container2">
            <img src={Banner1} alt="Avatar" className="image2" />
            <div className="middle2">
                <div className="text2">
    	            <h3>/Buy BañaTex</h3>
                  <h6> sustainable fibers to Vegan Leather </h6>
                  <h2> &rarr;</h2>
               </div>
             </div>
          </div>
          </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
