import React from "react";
import Header from "../components/Header";
import styles from "../styles/About.module.css";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div>
      <div
        className={`d-flex text-center text-white ` + styles.aboutBackground}
      >
        <div
          className="d-flex w-100 p-3 mx-auto flex-column"
          style={{ maxWidth: "42em" }}
        >
          <Header />
          <h1 className={styles.aboutCenterText + " display-4"}>Koranovel</h1>
        </div>
      </div>
      <Container fluid="sm" className="text-center">
        <h1 className="mt-5 display-5 mb-3">About Me</h1>
        <p className="lead about-text-p">
          Hi, My name is Kartika G.M. I&apos;m the owner of koranovel.com. This
          website is used as a platform for me to write more stories for people
          to enjoy. I have been in love with the world of writing and reading
          since i was a kid. My dream is to have my own book published. This
          website is the first step for me to achieve my dreams.
        </p>
        <br />
        <p className="lead about-text-p mb-3">
          I have written several novel. Some have a title, some doesn&apos;t.
          Some are finished, some aren&apos;t finished. Well, I guess
          that&apos;s what every artist goes through in their process of
          creating a masterpiece.
        </p>
        <h1 className="mt-5 display-5 mb-3">Experiences</h1>
        <p className="text-muted">
          The working experience that I have had since highschool
        </p>
        <Row>
          <Col className="text-right">2008 - present</Col>
          <Col className="text-left">Author</Col>
        </Row>
        <Row>
          <Col className="text-right">2018 - 2019</Col>
          <Col className="text-left">Freelance Marketing Property</Col>
        </Row>
        <Row>
          <Col className="text-right">2015 - 2016</Col>
          <Col className="text-left">Asisten Presiden Direktur</Col>
        </Row>
        <Row>
          <Col className="text-right">2013 - 2015</Col>
          <Col className="text-left">Financial Consultant</Col>
        </Row>
        <Row>
          <Col className="text-right"></Col>
          <Col className="text-left text-muted about-company-name">
            &nbsp;&nbsp;&nbsp;PT Millenium
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
