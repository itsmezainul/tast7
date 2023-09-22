import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-5">
      <Container>
        <img src="./Assets/Logo.svg" alt="" />
        <Row>
          <Col md={7}>
            <Row className="mt-5">
              <Col xs={6} md={4} className="">
                <ul>
                  <li>
                    <strong>Product</strong>
                  </li>
                  <li>Homepage</li>
                  <li>Pricing</li>
                  <li>Features</li>
                </ul>
              </Col>
              <Col xs={6} md={4} className="">
                <ul>
                  <li>
                    <strong>Help</strong>
                  </li>
                  <li>Live Chat</li>
                  <li>Send Email</li>
                  <li>FAQ</li>
                </ul>
              </Col>
              <Col xs={6} md={4} className="">
                <ul>
                  <li>
                    <strong>Company</strong>
                  </li>
                  <li>About</li>
                  <li>Customers</li>
                  <li>Blog</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center justify-content-center justify-content-md-end mt-5 mt-md-0"
          >
            <div>
              <p className="fw-bold">Try TweetNow</p>
              <form
                onSubmit={(e) => e.preventDefault}
                className="border border-dark d-flex justify-content-between p-1"
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    outline: "none",
                    border: "none",
                    padding: "20px",
                  }}
                />
                <Button
                  style={{
                    background: "#1d1b67",
                    borderColor: "#1d1b67",
                  }}
                  className="w-50"
                >
                  Start Scheduling
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
