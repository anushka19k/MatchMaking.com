import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import KiaraSid from "../Images/kiara-sid.jpg";

function SuccessStories() {

  return (
    
    <div>
      <h1 style={{margin:"2rem"}}>Matrimony Service with Millions of Success Stories</h1>
    <div className="SuccessStoriesDiv">
      <Row xs={1} md={3} >
        <Col className="SuccessStoriesCol">
          <Card className="SuccessCards" bg="dark">
            <Card.Img variant="top" src={KiaraSid} />
            <Card.Body>
            <Card.Title>Kiara & Sidharth</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="SuccessStoriesCol" >
          <Card className="SuccessCards" bg="dark">
            <Card.Img variant="top" src={KiaraSid} />
            <Card.Body>
              <Card.Title>Kiara & Sidharth</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="SuccessStoriesCol">
          <Card className="SuccessCards" bg="dark">
            <Card.Img variant="top" src={KiaraSid} />
            <Card.Body>
            <Card.Title>Kiara & Sidharth</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

    <div className="yourStory">
      <h1>Your story is waiting to happen!</h1><button onClick={""} className="storyBtn">Get Started</button>
    </div>
    </div>
  );
}

export default SuccessStories;
