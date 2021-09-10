import React from "react";
import { ListGroup, ListGroupItemHeading, ListGroupItem, Card } from 'reactstrap';

const ExperienceCard = () => {
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
            Experience
          </p>
          <ListGroupItemHeading>
            <p className='titleItem'>
              Team Work
            </p>
          </ListGroupItemHeading>
          <ListGroupItem>
            <p className='textItem'>Developer</p>
            <p className='textItem2'>Team member for the construction of <a href="http:\\tooelevalleyonline.com">Tooele Valley Online Food Court</a> to benefit local restuarants during the 2020 Covid-19 shut-down.</p>
          </ListGroupItem>
          <ListGroupItemHeading>
            <p className='titleItem'>
              Leadership
            </p>
          </ListGroupItemHeading>
          <ListGroupItem>
            <p className='textItem'>
              Substitute Teacher
            </p>
            <p className='textItem2'>
              Tooele Technical College
            </p>
            &nbsp;
            <p className='textItem'>
              Assistant Manager
            </p>
            <p className='textItem2'>
              Radio Shack
            </p>
            <p className='textItem2'>
              Jack in the Box
            </p>
            <p className='textItem2'>
              Athlete's Foot
            </p>
          </ListGroupItem>
          <ListGroupItemHeading>
            <p className='titleItem'>Technical</p>
          </ListGroupItemHeading>
          <ListGroupItem>
            <p className='textItem'>Contract Technician</p>
            <p className='textItem2'>Mark 10 Labs</p>
            <p className='textItem2'>Goldman-Sachs</p>
            <p className='textItem2'>Nielsen</p>
            <p className='textItem2'>H&R Block</p>
          </ListGroupItem>
          <ListGroupItemHeading>
            <p className='titleItem'>Volunteer</p>
          </ListGroupItemHeading>
          <ListGroupItem>
            <p className='textItem'>Technical</p>
            <p className='textItem2'>
              Church Regional Technology Specialist
            </p>
          </ListGroupItem>


        </ListGroup>
      </div>
    </Card>
  )
}

export default ExperienceCard;