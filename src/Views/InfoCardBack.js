import React from 'react';
import { Card, CardBody, CardSubtitle, Row, Col, Button } from 'reactstrap';
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelopeOpen } from 'react-icons/fa';
import { FaUserAlt, FaArrowRight } from 'react-icons/fa';

import ContactInfo from '../Data/ContactInfo';

const InfoCardBack = () => (
  <Card
    style={{
      display: 'flex',
      flexDirection: 'row',
      height: '75px',
      width: '300px',
      margin: '0 auto',
      border: '1pt solid black',
      borderRadius: "10px",
      padding: "1rem",
      boxShadow: "0.3rem 0.3rem 0.8rem rgba(0,0,0,0.3)",
      position: 'relative',
      backgroundColor: 'rgba(85,85,85,0.5)'
    }}
  >

    <CardBody style={{
      alignSelf: 'center',
      padding: "0.5rem",
      fontFamily: 'Baloo Paaji 2',
      fontWeight: 600,
    }}>

      <CardSubtitle
        className="text-muted"
        style={{
          fontSize: "1rem",
          padding: "0.3rem"
        }}
      >
        <Col className='column'>
          <Row>
            <Button href='tel:6195690314' style={{ textDecoration: 'none' }}>
              <FaMobileAlt style={{
                width: '0.75rem',
                height: '0.75rem',
                marginRight: '0.25rem'
              }} />
              {ContactInfo.phoneNumber}
            </Button>
          </Row>
          <Row>
            <Button href='maps:maps.google.com/?q=103+S+Hale+St+Grantsville+UT+84029' style={{ textDecoration: 'none' }} >
              <FaMapMarkerAlt style={{
                width: '0.75rem',
                height: '0.75rem',
                marginRight: '0.25rem'
              }} />
              {ContactInfo.city}, {ContactInfo.state}
            </Button>
          </Row>
          <Row>
            <Button href='mailto:lutes319@outlook.com' style={{ textDecoration: 'none' }} >
              <FaEnvelopeOpen style={{
                width: '0.75rem',
                height: '0.75rem',
                marginRight: '0.25rem'
              }} />
              {ContactInfo.email}
            </Button>
          </Row>
        </Col>
      </CardSubtitle>
    </CardBody>
    <Row style={{
      display: 'flex',
      position: 'absolute',
      alignSelf: 'center',
      right: 5,
      margin: '0 auto',
      border: '1pt solid blue',
      padding: '3px',
      borderRadius: "5px",
      boxShadow: "0.2rem 0.2rem 0.8rem rgba(0,0,0,0.3)",
    }}>
      <FaUserAlt style={{
        width: '20px',
        height: '20px',
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

export default InfoCardBack;