import React from "react";
import cardimg from "../../../images/cat6.jpg";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import Data from "../../../JeasonData/products.json";

import "./Cart.css";
const Cart = () => {
  return (
    <Container>
      <Row>
        {Data.map((item) => (
          <Col md={3}>
            <div className="cardmy">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>

                  <Card.Text>Some quick example text to build on the card title and make up the bulk of .</Card.Text>
                  <h5>${item.price}</h5>
                  <Button variant="primary">Add to Card</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
