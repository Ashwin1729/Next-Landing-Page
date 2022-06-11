import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                About <span className="text-warning">Us</span>
              </h3>
              <p className="text-muted">
                Travist is an enhancing Travel Agency and we help you to Travel
                and Explore the world.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h6 className="text-dark font-weight-light f-20 mb-3">
              Our Mission
            </h6>
            <p className="text-muted font-weight-light">
              Our Mission is to perform and deliver excellent quality service to
              our clients. Providing them unforgettable travel, enjoyable, with
              guaranteed services that exceed their expectations With this
              objective, we aim to earn the reputation as "Your Preferred Travel
              Agency". The satisfaction of our customers and extraordinary
              service is the main aim, saving your time and money while
              providing the best value for your trip.
            </p>
          </Col>
          <Col md={6}>
            <h6 className="text-dark font-weight-light f-20 mb-3">
              Our Vision
            </h6>
            <p className="text-muted font-weight-light">
              Statement Our vision is to be innovators, leaders and creative in
              the concepts of travel, positioning our company in the market
              within the best tourism companies in Egypt, being recognized for
              our professionalism and high quality products.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
