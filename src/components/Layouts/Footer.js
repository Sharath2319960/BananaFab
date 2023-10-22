import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row className="bottom">
         
          <Col sm={6} lg={6} style={{marginTop:"100px"}}>
              <div className="text-center footerfont">
                <h5 className="footerfont"> Follow Us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="/">
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} lg={6}style={{marginTop:"100px"}} >
              <div className="text-center footerfont ">
                <h5 className="footerfont">SIGN UP FOR OUR LATEST NEWS AND UPDATES</h5>
                <input type="email" placeholder="please enter email" className="emailinput"/>
                <p>This form collects your email to add to our list for sending newsletters and updates. Please look at our privacy policy for further information on how we protect and manage your submitted data.</p>
                <p> <input type="checkbox"/>I consent to Ananas Anam collecting my email</p>
                <p> I would like to hear about the following:</p>
                <Row> 
                <Col lg={2}></Col> 
                <Col lg={3}> <input type="checkbox"/>BananaFab</Col> 
                <Col lg={3}> <input type="checkbox"/>Bañatex </Col> 
                <Col lg={2}> <input type="checkbox"/>Bañatex </Col> 
                <Col lg={2}></Col>
                </Row>
                

              </div>
            </Col>
            
          </Row>
          <Row className="copy_right">
            <Col style={{marginTop:"40px"}}>
              <div>
                <ul className="list-unstyled text-center mb-0 footerfont" >
                  <li className="footerfont">
                    <Link to="/" className="footerfont" >
                      © 2023 . All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footerfont">About Us</Link>
                  </li>
                  <li>
                    <Link to="/" className="footerfont">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/" className="footerfont">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <Col lg={12}>
            <div  className="letest_News" >
              <h1 className="footerfont"> Banana  Fab</h1>
             </div>
          </Col>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
