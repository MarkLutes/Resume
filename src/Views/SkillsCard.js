import React from "react";
import { ListGroup, ListGroupItemHeading, ListGroupItem, Card } from 'reactstrap';

const SkillsCard = () => {

  const softwareSkills = ['VS Code', 'Xcode', 'Android Studio', 'Docker', 'Postman', 'MongoDB', 'SQL', 'Photoshop', 'Windows', 'MacOS', 'Linux'];

  const developmentSkills = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'React Native', 'Bootstrap', 'DevOps', 'Project Management', 'GitHub']

  return (
    <Card style={{
      margin: '0 auto',
      border: '1pt solid black',
      borderRadius: "10px",
      padding: "1.75rem",
      boxShadow: "0.3rem 0.3rem 0.8rem rgba(0,0,0,0.3)",
      backgroundColor: 'white',
      maxWidth: '400px'
    }}>
      <div>
        <ListGroup style={{ listStyle: 'none', padding: '0', color: 'rgba(85,85,85,0.5)' }}>
          <p className='mainTitleItem' style={{ borderBottom: '1pt solid black' }}>
            Skills
          </p>
          <ListGroupItemHeading>
            <p className='titleItem'>
              Software
            </p>
          </ListGroupItemHeading>
          <ListGroupItem className='textItem'>

            <ul className='listItems'>
              {softwareSkills.map(skill => { return <li key={Math.random().toString(36).substr(2, 9)}>{skill}</li> })}
            </ul>

          </ListGroupItem>
          <ListGroupItemHeading>
            <p className='titleItem'>
              Development
            </p>
          </ListGroupItemHeading>
          <ListGroupItem className='textItem'>

            <ul className='listItems'>
              {developmentSkills.map(skill => { return <li key={Math.random().toString(36).substr(2, 9)}>{skill}</li> })}
            </ul>

          </ListGroupItem>
        </ListGroup>
      </div>
    </Card>
  )
}

export default SkillsCard;