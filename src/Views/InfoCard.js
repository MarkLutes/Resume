import React from 'react';
import { Card, CardBody, CardSubtitle, Row } from 'reactstrap';
import { FaAddressCard, FaArrowRight } from 'react-icons/fa';

const InfoCard = () => (
  <Card
    style={{
      display: 'flex',
      flexDirection: 'row',
      height: '75px',
      width: '300px',
      margin: '0 auto',
      border: '1pt solid black',
      borderRadius: "10px",
      padding: "1.75rem",
      boxShadow: "0.3rem 0.3rem 0.8rem rgba(0,0,0,0.3)",
      backgroundColor: 'rgba(85,85,85,0.5)',
      justifyContent: 'center',
      position: 'relative'
    }}
  >

    <CardBody style={{ display: 'flex', alignSelf: 'center', padding: "0.5rem", fontFamily: '"Baloo Paaji 2"', fontWeight: 600 }}>

      <CardSubtitle
        className="text-muted"
        style={{
          fontSize: "2rem",
          padding: "0.75rem",
          marginRight: 25
        }}
      >
        Contact Me
      </CardSubtitle>
    </CardBody>
    <Row style={{
      display: "flex",
      position: 'absolute',
      right: 5,
      alignSelf: 'center',
      margin: '0 auto',
      border: '1pt solid blue',
      padding: '3px',
      borderRadius: "5px",
      boxShadow: "0.2rem 0.2rem 0.8rem rgba(0,0,0,0.3)",
    }}>
      <FaAddressCard style={{
        width: '22px',
        height: '22px',
        marginRight: '2px'
      }} />
      <FaArrowRight style={{
        width: '15px',
        height: '15px',
        alignSelf: 'center'
      }} />
    </Row>
  </Card>
)

export default InfoCard;
