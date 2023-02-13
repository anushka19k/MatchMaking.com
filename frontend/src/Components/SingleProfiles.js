import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import single1 from '../Images/single1.jpg'
import single2 from '../Images/single2.jpg'
import single3 from '../Images/single3.jpg'
import single4 from '../Images/single4.jpg'
import single5 from '../Images/single5.jpg'
import single6 from '../Images/single6.jpg'


const singleprofiles = [
  {
    id:1,
    name:"Abhishek Kapoor",
    src:single1
  },
  {
    id:2,
    name:"Tina Pal",
    src:single2
  },
  {
    id:3,
    name:"Priya Gupta",
    src:single3
  },
  {
    id:4,
    name:"Kashish Sharma",
    src:single4
  },
  {
    id:5,
    name:"Mayank Arora",
    src:single5
  },
  {
    id:6,
    name:"Nitin Kumar ",
    src:single6
  },
]

function SingleProfiles() {
  return (
    <Row xs={1} md={3} className="g-4">
      {singleprofiles.map((item) => (
        <Col style={{display:"flex",justifyContent:"center"}}>
          <Card bg="dark" style={{width:"70%",height:"30rem"}}>
            <Card.Img className='cardimgs' variant="top" src={item.src} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default SingleProfiles;