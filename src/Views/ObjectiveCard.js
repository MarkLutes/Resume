import React from "react";
import { ListGroup, ListGroupItemHeading, ListGroupItem, Card } from 'reactstrap';

const ObjectiveCard = () => {
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
        <ListGroup style={{ listStyle: 'none', padding: '0', color: 'rgba(85,85,85,0.5)' }} >
          <ListGroupItemHeading>
            <p className='mainTitleItem' style={{ borderBottom: '1pt solid black' }}>
              Objective
            </p>
          </ListGroupItemHeading>
          <ListGroupItem>
            <p className='textItem'>
              To leverage over fifteen years’ experience of technological problem-solving to broaden and sharpen skills in a software development environment.
            </p>
          </ListGroupItem>
        </ListGroup>
      </div>
    </Card>
  )
}
export default ObjectiveCard;