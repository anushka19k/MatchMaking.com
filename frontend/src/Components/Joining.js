import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Joining() {
  return (
    <div
      style={{
        marginTop: "3rem",
        padding: "2rem",
        backgroundColor: "rgb(0, 0, 0)",
      }}
    >
      <h2>Stop Swiping, Start Live-ing!</h2>
      <Container fluid>
        <Row xs={1} md={3}>
          <Col className={"joiningcardscols"}>
            <div className="joiningcards">
            <Link to={"/login"}><div className="joiningcardsicons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="black"
                  class="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </div></Link>
              <div className="joiningtext">
                <p>
                  <h2>Sign Up</h2>
                  Register for free & put up your Matrimony Profile
                </p>
              </div>
            </div>
          </Col>
          <Col className={"joiningcardscols"}>
            <div className="joiningcards">
            <Link to={"/notavailable"}><div className="joiningcardsicons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="black"
                  class="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                </svg>
              </div>
              </Link>
              <div className="joiningtext">
                <p>
                  <h2>Connect</h2>
                  Select & Connect with Matches you like
                </p>
              </div>
            </div>
          </Col>
          <Col className={"joiningcardscols"}>
            <div className="joiningcards">
            <Link to={"/notavailable"}><div className="joiningcardsicons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="black"
                  class="bi bi-camera-reels"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </div>
              </Link>
              <div className="joiningtext">
                <p>
                  <h2>Interact</h2>
                  Become a Premium Member & Start a Conversation
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Joining;
