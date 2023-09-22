import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function FeaturePage() {
  const darkBlue = "#1d1b67";
  return (
    <main>
      <Container>
        <Row
          className=""
          style={{
            minHeight: "100%",
          }}
        >
          <Col
            className="ps-md-5 d-flex justify-content-center align-items-center"
            md={6}
            style={{
              background: "#ffffff",
              paddingTop: "80px",
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "3rem",
                  color: darkBlue,
                }}
              >
                Post when your audience is most active.
              </h2>
              <p className="fs-4">
                With TimeNow, automatically schedule your posts on Twitter,
                LinkedIn, and Instagram to post when your followers are most
                active.
              </p>
              <div className="">
                <Button
                  className="p-4 fw-bolder fs-3 me-5"
                  style={{ background: darkBlue, borderColor: darkBlue }}
                >
                  Start Scheluling
                </Button>
                <Button
                  variant=""
                  className="p-4 fw-bolder fs-3 "
                  style={{ color: darkBlue }}
                >
                  View Demo
                </Button>
              </div>
              <p className="fs-4 mt-4">
                <span className="me-4" style={{ widows: "48px" }}>
                  <img src="./Assets/Shield.svg" alt="sheild icon" />
                </span>
                TimeNow does not sell your data.{" "}
                <strong
                  style={{ textDecoration: "underline", color: darkBlue }}
                >
                  Learn more
                </strong>
              </p>
            </div>
          </Col>
          <Col
            className="pe-md-5 pb-5 pb-md-0 mt-5 mt-md-0 d-flex justify-content-center align-items-center"
            md={6}
            style={{
              background: "#46ccde",
              paddingTop: "80px",
            }}
          >
            <Image fluid src="./Assets/Mockup.png" alt="" />
          </Col>
        </Row>
        <Row className="mt-5 px-sm-5">
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <h2
                className="fw-bolder"
                style={{
                  color: darkBlue,
                  fontSize: "2.5rem",
                }}
              >
                TimeNow is used by the most influential people.
              </h2>
              <div className="d-flex justify-content-evenly flex-wrap mt-4">
                <img src="./Assets/UA1.png" alt="" width={60} />

                <img src="./Assets/UA2.png" alt="" width={60} />

                <img src="./Assets/UA3.png" alt="" width={60} />

                <img src="./Assets/UA4.png" alt="" width={60} />

                <img src="./Assets/UA5.png" alt="" width={60} />

                <img src="./Assets/UA6.png" alt="" width={60} />

                <img src="./Assets/UA7.png" alt="" width={60} />

                <img src="./Assets/UA8.png" alt="" width={60} />
              </div>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column align-items-center  mt-5 py-5"
          >
            <p className="fs-4">
              The most influential people on Facebook, Twitter, and Instagram
              are using TweetNow to schedule posts when their followers are most
              active.
            </p>
            <p className="fs-4">
              They generally receive 23% more engagement than people who do not.
            </p>
          </Col>
        </Row>
        <Row
          className="py-5 px-sm-5"
          style={{
            background: "#cdf9ff",
          }}
        >
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <p
                className="fs-5 fw-bold"
                style={{
                  color: "#3b60bf",
                }}
              >
                Unified Dashboard
              </p>
              <h2
                className=" fw-bolder"
                style={{
                  fontSize: "3rem",
                  color: "#005661",
                }}
              >
                Customizable dashboard for all platforms.
              </h2>
              <p className="fs-4">
                Use Twitter and Instagram but not LinkedIn? You can customize
                your dashbord to your liking. You can even schedule the same
                post to individual platforms instead of all platforms
              </p>
              <Button
                className="py-3 px-4 fw-bolder fs-2"
                style={{ background: darkBlue, borderColor: darkBlue }}
              >
                Start Scheduling
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center mt-5 mt-sm-0">
            <div>
              <p
                className="fs-5 fw-bold"
                style={{
                  color: "#3b60bf",
                }}
              >
                Enhanced Analytics
              </p>
              <h2
                className=" fw-bolder"
                style={{
                  fontSize: "3rem",
                  color: "#005661",
                }}
              >
                Real-time data that tells you everything.
              </h2>
              <p className="fs-4">
                Get Detailed reports of what's working and what isn't.
                Engagement rates, impressions, views, and much more data is
                available to you through our in-depth dashboard tool.
              </p>
              <Button className="fw-bold fs-5" variant="">
                {" "}
                View Live Demo ->
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
