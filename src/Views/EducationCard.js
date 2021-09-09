import React from "react";
import { ListGroup, ListGroupItemHeading, ListGroupItem, Card } from 'reactstrap';

const EducationCard = () => {
  return (
    <Card style={{
      margin: '0 auto',
      border: '1pt solid black',
      borderRadius: "10px",
      padding: "1.75rem",
      boxShadow: "0.3rem 0.3rem 0.8rem rgba(0,0,0,0.3)",
      backgroundColor: 'white',
    }}>
      <div>
        <ListGroup style={{ listStyle: 'none', padding: '0', color: 'rgba(85,85,85,0.5)' }}>
          <p className='mainTitleItem' style={{ borderBottom: '1pt solid black' }}>
            Education
          </p>
          <ListGroupItemHeading>
            <p className='titleItem'>
              Tooele Technical College
            </p>
          </ListGroupItemHeading>
          <ListGroupItem>
            <p className='textItem'>Software Development</p>
            <p className='textItem2'>Certificate of Completion</p>
            <p className='textItem2'>Student of the Month - June 2020</p>
          </ListGroupItem>
          <ListGroupItemHeading>
            <p className='titleItem'>
              Cuyamaca College
            </p>
          </ListGroupItemHeading>
          <ListGroupItem>
            <p className='textItem'>Computer Maintenance</p>
          </ListGroupItem>
        </ListGroup>
      </div>
    </Card>
  )
}

export default EducationCard;