import React from 'react';
import Cart from './Cart/Cart';
import {Container,Row,Col} from "react-bootstrap";
const Product = () => {
  return (
    <div>
  <Container>
  <Row>
    <Col><Cart/> </Col>
    <Col><Cart/> </Col>
    <Col><Cart/> </Col>
    {/* <Col><Cart/> </Col> */}
  </Row>
  
</Container>
    </div>
  );
};

export default Product;