import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <a className="footertext" href="#">
          Back to Top
        </a>
      </div>
      <Container>
        <Row>
          <Col md={3}>
            <div className="left-footer">
              <h5>Get to Know Us</h5>
              <ul>
                <li className="list-item">
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About Amazon</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Amazon Devices</a>
                </li>
                <li>
                  <a href="#">Amazon Science</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="left-footer">
              <h5>	
                    Make Money with Us</h5>
              <ul>
                <li className="list-item">
                  <a href="#">Sell products on Amazon</a>
                </li>
                <li>
                  <a href="#">Sell on Amazon Business</a>
                </li>
                <li>
                  <a href="#">Sell apps on Amazon</a>
                </li>
                <li>
                  <a href="#">Become an Affiliate</a>
                </li>
                <li>
                  <a href="#">Advertise Your Products</a>
                </li>
                <li>
                  <a href="#">Self-Publish with Us</a>
                </li>
                <li>
                  <a href="#">Host an Amazon Hub</a>
                </li>
                <li>
                  <a href="#">See More Make Money</a>
                </li>
                <li>
                  <a href="#">With us</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={3}>
            <div className="left-footer">
              <h5>	
                      Amazon Payment Products</h5>
              <ul>
                <li className="list-item">
                  <a href="#">Amazon Business Card</a>
                </li>
                <li>
                  <a href="#">Shop with Points</a>
                </li>
                <li>
                  <a href="#">Reload Your Balance</a>
                </li>
                <li>
                  <a href="#">Amazon Currency Converter</a>
                </li>
                 
              </ul>
            </div>
          </Col>

          <Col md={3}>
            <div className="left-footer">
              <h5>	
Let Us Help You</h5>
              <ul>
                <li className="list-item">
                  <a href="#">Amazon and COVID-19</a>
                </li>
                <li>
                  <a href="#">Your Account</a>
                </li>
                <li>
                  <a href="#">Your Orders</a>
                </li>
                <li>
                  <a href="#">Shipping Rates & Policies</a>
                </li>
                <li>
                  <a href="#">Returns & Replacements</a>
                </li>
                <li>
                  <a href="#">Amazon Assistant</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
