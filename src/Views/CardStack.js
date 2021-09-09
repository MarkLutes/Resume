import React from "react";
import {
  Container, Row, Col
} from "reactstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import InfoCard from "./InfoCard";
import InfoCardBack from "./InfoCardBack";
import ObjectiveCard from './ObjectiveCard';
import EducationCard from "./EducationCard";
import SkillsCard from "./SkillsCard";
import ExperienceCard from "./ExperienceCard";
import MyPic from '../Assets/Images/MyPhoto.png';

export default class CardStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFlipped: [],
    }
  }

  cardFlip() {
    const cardFlipped = this.state.cardFlipped
    this.setState({ cardFlipped })
  }
  render() {
    return (
      <Container style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center', maxWidth: '1400px' }}>
        <Row style={{ display: 'flex', position: 'fixed', top: 15, alignItems: 'center', justifyContent: 'space-around', zIndex: '100', height: '5rem', width: '325px', paddingTop: '0.3rem', paddingBottom: '0.5rem', paddingRight: '0.5rem', paddingLeft: '1rem', }} >
          <Col>
            <img src={MyPic} style={{ height: '3.5rem' }} alt="Mark" />
          </Col>
          <Col>
            <p style={{ fontFamily: '"Baloo Paaji 2"', fontWeight: 600, fontSize: '1.50rem', color: 'white', paddingRight: '2rem' }}>
              Mark Lutes
            </p>
          </Col>
        </Row>

        <Row style={{ position: 'fixed', top: 15, zIndex: '88', width: '350px', height: '5.5rem', backgroundColor: 'rgba(85,85,85,0.5)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', border: '1pt solid black', borderRadius: "10px", boxShadow: "0.3rem 0.3rem 0.8rem rgba(0,0,0,0.3)", }}>
        </Row>

        <Row style={{ height: "6rem" }}>
          <Col><p>&nbsp;</p></Col>
        </Row>

        <Row style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-evenly' }}>
          <Col style={{
            minWidth: '350px',
            maxWidth: '33%',
            paddingTop: "1rem",
            paddingBottom: "1rem"
          }}>
            <ObjectiveCard />
          </Col>
          <Col style={{
            minWidth: '350px',
            maxWidth: '33%',
            paddingTop: "1rem",
            paddingBottom: "1rem"
          }}>
            <EducationCard />
          </Col>
          <Col style={{
            minWidth: '350px',
            maxWidth: '33%',
            paddingTop: "1rem",
            paddingBottom: "1rem"
          }}>
            <SkillsCard />
          </Col>
          <Col style={{
            minWidth: '350px',
            maxWidth: '33%',
            paddingTop: "1rem",
            paddingBottom: "1rem"
          }}>
            <ExperienceCard />
          </Col>
        </Row>
        <Row style={{ height: "5.5rem" }} >
          <Col><p>&nbsp;</p></Col>

        </Row>
        <Row style={{ display: 'flex', position: 'fixed', bottom: 2, justifySelf: 'center' }}>
          <Col
            style={{
              width: '350px',
              paddingTop: "1rem",
              paddingBottom: "1rem"
            }}
          >
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="vertical" // horizontal or vertical
              isFlipped={this.state.cardFlipped}
            >
              <FrontSide style={{ padding: "0rem", boxShadow: "none" }}>
                <InfoCard flip={this.cardFlip.bind(this, null)} />
              </FrontSide>
              <BackSide style={{ padding: "0rem", boxShadow: "none" }}>
                <InfoCardBack flip={this.cardFlip.bind(this, null)} />
              </BackSide>
            </Flippy>
          </Col>
        </Row>
      </Container >
    )
  }
};
