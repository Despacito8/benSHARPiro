import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import obrazek from './assets/images/old one.jpg'
import {AnimalItem} from './assets/components/AnimalItem'

function App() {

const myData = {
  src: obrazek,
  title: 'the old one',
  description: 'good times'
}

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
          <img width={450} className="image-fluid" src={obrazek} alt="old one"></img>
          
          </Col>
          <Col xs={12} md={6}>
          <img width={450} className="image-fluid" src={obrazek} alt="old one"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
