import React from "react";
import Header from "../components/Header";
import styles from "../styles/About.module.css";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <div
        className={`d-flex text-center text-white ` + styles.aboutBackground}
      >
        <Head>
          <title>Koranovel/About</title>
          <meta name="Home" content="Koranovel Official Website" />
          <meta name="description" content="This is a website, owned by KGM, this particular page is where she wrote her experience and dreams"/>
          <meta name="keywords" content="Novel, Fantasy, True Story," />
          <meta name="author" content="Kartika Mardika" />
        </Head>
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
          Hi, My name is Kartika .M. I&apos;m the owner of koranovel.com. This
          website is used as a platform for me to write more stories for people
          to enjoy. I have been in love with the world of writing and reading
          since i was a kid.
        </p>
        <br />
        <p className="lead about-text-p mb-3">
          I have written several novels. Some have titles,
          Some are finished, some aren&apos;t finished. Well, I guess
          that&apos;s what every artist goes through in their process of
          creating a masterpiece.
        </p>
        {/*<h1 className="mt-5 display-5 mb-3">Experiences</h1>*/}
        {/*<p className="text-muted">*/}
        {/*  The working experience that I have had since highschool*/}
        {/*</p>*/}
        {/*<Row>*/}
        {/*  <Col className="text-right">2005 - Present</Col>*/}
        {/*  <Col className="text-left">Writer</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*  <Col className="text-right">2013 - Present</Col>*/}
        {/*  <Col className="text-left">Author</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*  <Col className="text-right">2013 - 2015</Col>*/}
        {/*  <Col className="text-left">Financial Consultant (Stock Market)</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*  <Col className="text-right">2015 - 2016</Col>*/}
        {/*  <Col className="text-left">Asisten Presiden Direktur</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*  <Col className="text-right">2015 - 2017</Col>*/}
        {/*  <Col className="text-left">Pengelola Wisata Kepulauan Seribu</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*  <Col className="text-right">2018 - 2019</Col>*/}
        {/*  <Col className="text-left">Freelance Marketing Property</Col>*/}
        {/*</Row>*/}
      </Container>
    </div>
  );
};

export default About;
