import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Photo1 from "../Images/photo1.jpg";
import Photo2 from "../Images/photo2.jpg";
import Photo3 from "../Images/photo3.jpg";
import { Link } from "react-router-dom";

function SuccessStories() {

  return (
    
    <div>
      <h1 style={{margin:"2rem"}}>Matrimony Service with Millions of Success Stories</h1>
    <div className="SuccessStoriesDiv">
      <Row xs={1} md={3} >
        <Col className="SuccessStoriesCol">
          <Card className="SuccessCards" bg="dark">
            <Card.Img variant="top" src={Photo1} />
            <Card.Body>
            <Card.Title>Sangeeta & Shreyas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="SuccessStoriesCol" >
          <Card className="SuccessCards" bg="dark">
            <Card.Img variant="top" src={Photo2} />
            <Card.Body>
              <Card.Title>Anamika & Rajesh</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="SuccessStoriesCol">
          <Card className="SuccessCards" bg="dark">
            <Card.Img variant="top" src={Photo3} />
            <Card.Body>
            <Card.Title>Sachin & Jyoti</Card.Title>
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
      <h1>Your story is waiting to happen!</h1><Link to={"/login"}><button className="storyBtn">Get Started</button></Link>
    </div>
    </div>
  );
}

export default SuccessStories;
