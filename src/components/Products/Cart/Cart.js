import React from 'react';
import cardimg from "../../../images/cat6.jpg"
import {Card,Button} from "react-bootstrap";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
       
        <div className='cardmy'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cardimg}/>
  <Card.Body>
  
    <Card.Title>Cad5 Calble 20 mitter</Card.Title>
   
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
       .
    </Card.Text>
    <h5>Price=455</h5>
    <Button variant="primary">Add to Card</Button>
  </Card.Body>
</Card>
        </div>
   
      </div>
       
    
  );
};

 
export default Cart;