import React from "react";
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    {
      title: "Travel Information",
      desc: "Travist give you up-to-date, accurate, and timely information regarding destinations mode of travel, accommodation, sight-seeing, shopping, immigration, passport, visa, customs clearance and procedure, health and security rules, and various permits required to travel in particular areas, etc.",
    },
    {
      title: "Itinerary Preparation",
      desc: "The term tourists itinerary is used to identify the origin, destination and all the stopping points in a traveler’s tours. It is a composition of various elements and designed after a detailed study of the market. Travist prepare an itinerary for your tour packages.",
    },
    {
      title: "Tour Packaging and Costing",
      desc: "We prepare a tour package and sell them to tourists. The coasting and pricing of tour packages depend to a large extent on us. We effectively negotioate with the principle suppliers",
    },
    {
      title: "Currency Services",
      desc: "Travist as an approved travel agency authorized by Govt. body provides currency exchange services to tourists.",
    },
    {
      title: "Organization of Conference",
      desc: "We offer you a complete convention/conference package which includes registration of the participants at the venue to be picked up for dropped to the airport/hotel, overhead projectors, slide projectors, TV, VCR, information counter, sightseeing, etc.",
    },
  ];

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Services</span>
              </h3>
              <p className="text-muted">
                Quality services and assurance are provided for all our guests
                by considering their comfort as a primary factor. We take care
                of you and believe to fulfill your maximum needs in the best way
                we can.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <div className="mb-5">
                  <i className={service.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  {service.title}
                </h5>
                <p className="text-muted mb-4">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
