import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function PricingPage() {
  const [isClick, setIsClick] = useState(true);
  return (
    <main style={{ paddingTop: "80px" }} className="text-center">
      <Container>
        <PricingHeader isClick={isClick} setIsClick={setIsClick} />
        <Row className="py-5">
          <PriceCard isClick={isClick} />
        </Row>
      </Container>
    </main>
  );
}

function PricingHeader({ isClick, setIsClick }) {
  return (
    <>
      <Row>
        <div>
          <h1 style={{ fontSize: "3rem" }} className="fw-bolder">
            Flexible Plans for Everyone.
          </h1>
          <p className="px-5">
            Our plans are made for everyone. you're starting out on social
            media, or have been on there for a long time, we have a plan that's
            right for you.
          </p>
        </div>
      </Row>
      <Row>
        <Form className="d-flex justify-content-center align-items-center gap-3 fs-4">
          <span
            style={
              isClick
                ? {
                    color: "#425466",
                    fontWeight: "bold",
                  }
                : { color: "#425466" }
            }
          >
            Billed Monthly
          </span>
          <Form.Check
            type="switch"
            id="custom-switch"
            onClick={() => setIsClick((pre) => !pre)}
          />
          <span
            style={
              !isClick
                ? {
                    color: "#425466",
                    fontWeight: "bold",
                  }
                : { color: "#425466" }
            }
          >
            Billed Yearly
          </span>
        </Form>
      </Row>
    </>
  );
}

function PriceCard({ isClick }) {
  const calc = isClick ? 1 : 12;
  return (
    <>
      <Col md={6} lg={4} className="">
        <Card style={{ width: "300px" }} className="p-3 mx-auto mt-md-0 mt-5">
          <div className="text-start">
            <p>
              <span className="fs-1 fw-bolder">${4 * calc}</span>/
              {isClick ? "mo" : "yr"}
            </p>
            <p>Perfect plan if you're just Stating</p>
          </div>
          <hr />
          <Card.Body className="text-start">
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              LinkedIn Integration
            </li>
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              Twitter Integration
            </li>
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              Real-time Analytics
            </li>
            <Button
              className="w-100 rounded-0 py-3 my-3 fw-bolder fs-5"
              style={{
                background: "#1d1b67",
                borderColor: "#1d1b67",
              }}
            >
              Subscribe Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={4} className="">
        <Card style={{ width: "300px" }} className="p-3 mx-auto mt-md-0 mt-5">
          <div className="text-start">
            <p>
              <span className="fs-1 fw-bolder">${12 * calc}</span>/
              {isClick ? "mo" : "yr"}
            </p>
            <p>Perfect plan if you're just Stating</p>
          </div>
          <hr />
          <Card.Body className="text-start">
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              LinkedIn Integration
            </li>
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              Twitter Integration
            </li>
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              Instagram Integration
            </li>
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              Real-time Analytics
            </li>
            <Button
              className="w-100 rounded-0 py-3 my-3 fw-bolder fs-5"
              style={{
                background: "#1d1b67",
                borderColor: "#1d1b67",
              }}
            >
              Subscribe Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={4} className="">
        <Card style={{ width: "300px" }} className="p-3 mx-auto mt-md-0 mt-5">
          <div className="text-start">
            <p>
              <span className="fs-1 fw-bolder">${7 * calc}</span>/
              {isClick ? "mo" : "yr"}
            </p>
            <p>Perfect plan if you're just starting out.</p>
          </div>
          <hr />
          <Card.Body className="text-start">
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              LinkedIn Integration
            </li>
            <li style={{ listStyle: "none" }}>
              <img className="p-2" src="./Assets/checkmark.svg" alt="" />
              Twitter Integration
            </li>
            <Button
              className="w-100 rounded-0 py-3 my-3 fw-bolder fs-5"
              style={{
                background: "#1d1b67",
                borderColor: "#1d1b67",
              }}
            >
              Subscribe Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
