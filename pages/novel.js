import React, {useState} from "react";
import Image from "next/image";
import styles from "../styles/Novel.module.css";
import Header from "../components/Header";
import {Container, Row} from "reactstrap";
import Head from "next/head";
import CloudImageLoader from "../components/CloudImageLoader";

import punarbhawaCover from "../assets/images/Punarbhawa.png";
import iNeedArtInLoveCover from "../assets/images/iNeedArtInLove.png";
import duaCoklatCover from "../assets/images/duaCoklat.png";
import futuristic616Cover from "../assets/images/futuristic616.png";
import robinDanDaraCover from "../assets/images/robinDanDara.png";

const Novel = () => {
    const [showMore, setShowMore] = useState(true);
    const [showDots, setShowDots] = useState(true);
    const [moreLessText, setMoreLessText] = useState(true);

    const showMoreLess = () => {
        setShowMore(!showMore);
        setShowDots(!showDots);
        setMoreLessText(!moreLessText);
    };

    let showText = showMore ? styles.novelMore : styles.novelLess;
    let showingDots = showDots ? styles.novelShowDots : styles.novelNotShowDots;
    let showMoreLessText = moreLessText ? "More" : "Less";

    return (
        <div
            className="d-flex text-center text-white"
            style={{backgroundColor: "#FFA1A9"}}
        >
            <div
                className="d-flex w-100 h-100 p-3 mx-auto flex-column"
                style={{maxWidth: "42em"}}
            >
                <Head>
                    <title>Koranovel/Novel</title>
                    <meta name="Home" content="Koranovel Official Website"/>
                    <meta name="description"
                          content="This is a website, owned by KGM, will be filled with her novel collection that you can read for free! Come and Check us out!. Read the novel to your heart content"/>
                    <meta name="keywords" content="Novel, Fantasy, True Story,"/>
                    <meta name="author" content="Kartika Mardika"/>
                </Head>
                <Header/>
                <Container fluid="sm" className={styles.novelContainer}>
                    <h3 className="mb-5">
                        This are the lists of novel that I have written
                    </h3>
                    {/* <NavLink to="/"> */}
                    <Row>
                        <div
                            className="card mb-3 border-light"
                            style={{maxWidth: "700px", backgroundColor: "transparent"}}
                        >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image
                                        loader={CloudImageLoader}
                                        src={punarbhawaCover}
                                        alt="..."
                                        width={135}
                                        height={210}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Punarbhawa</h5>
                                        <p className="card-text">
                                            The story is about miracles. It tells the stories of
                                            amazing reincarnation of 5 characters
                                            <span className={showingDots}>...</span>
                                            <span className={showText}>
                        {" "}
                                                Purbani Jaya, Nadeem Ajala, Banyu Anggoro, Wanda Kraka, dan Maya Sinora have their own
                        life, different profession, family background, and place
                        to live, they don&apos;t even know one another, however
                        they have amazing uniqueness that comes into their life.
                        Fantasies and dreams of their former life become true
                        just because they have very good life record. They have
                        a sincere hearts, natural, and pure. However, one of
                        them doesn&apos;t recieved as they expected. Who is the
                        person that doesn&apos;t have a smooth reincarnation?
                        What did the person do in their previous life? Curious
                        to find the perfect life of each character? their
                        profession, family, power, love, and even hope? find out
                        more by reading the novel... ;)
                      </span>
                                            <span
                                                className={"btn px-0 " + styles.novelMoreLessButton}
                                                onClick={showMoreLess}
                                            >
                        {showMoreLessText}
                      </span>
                                        </p>
                                        <p className="card-text mb-0">
                                            <small className="text-muted">
                                                Genre: Novel, Fiction, Erotic Romance, Metropop
                                            </small>
                                        </p>
                                        <blockquote className="blockquote mb-0">
                                            <footer className="blockquote-footer">2010 - now</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    {/* </NavLink> */}

                    <Row>
                        <div
                            className="card mb-3 border-light"
                            style={{maxWidth: "700px", backgroundColor: "transparent"}}
                        >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image
                                        loader={CloudImageLoader}
                                        src={iNeedArtInLoveCover}
                                        alt="..."
                                        width={135}
                                        height={210}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">I Need Art In Love</h5>
                                        <p className="card-text">
                                            The story revolves around two teenagers that needed the
                                            art of loving in order to love each other
                                        </p>
                                        <p className="card-text mb-0">
                                            <small className="text-muted">
                                                Genre: Novel, Fiction, Erotic Romance, Metropop
                                            </small>
                                        </p>
                                        <blockquote className="blockquote mb-0">
                                            <footer className="blockquote-footer">2015</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div
                            className="card mb-3 border-light"
                            style={{maxWidth: "700px", backgroundColor: "transparent"}}
                        >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image
                                        loader={CloudImageLoader}
                                        src={duaCoklatCover}
                                        alt="..."
                                        width={135}
                                        height={210}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Dua Kotak Coklat DiSetiap Malam
                                        </h5>
                                        <p className="card-text">
                                            Everyday at mid, I must exactly eat two boxes of
                                            chocolate. Otherwise, something bad will happen.
                                        </p>
                                        <p className="card-text mb-0">
                                            <small className="text-muted">
                                                Genre: Novel, Suspense, Thriller
                                            </small>
                                        </p>
                                        <blockquote className="blockquote mb-0">
                                            <footer className="blockquote-footer">2016-2020</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div
                            className="card mb-3 border-light"
                            style={{maxWidth: "700px", backgroundColor: "transparent"}}
                        >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image
                                        loader={CloudImageLoader}
                                        src={futuristic616Cover}
                                        alt="..."
                                        width={135}
                                        height={210}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Futuristic 616</h5>
                                        <p className="card-text">
                                            Welcome to the year 2616. The world is in chaos, robots
                                            are fighting with humans. Nobody wants to give up their
                                            rights.
                                        </p>
                                        <p className="card-text mb-0">
                                            <small className="text-muted">
                                                Genre: Novel, Sci-fi, Drama
                                            </small>
                                        </p>
                                        <blockquote className="blockquote mb-0">
                                            <footer className="blockquote-footer">2019 - now</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    {/*<Row>*/}
                    {/*    <div*/}
                    {/*        className="card mb-3 border-light"*/}
                    {/*        style={{maxWidth: "700px", backgroundColor: "transparent"}}*/}
                    {/*    >*/}
                    {/*        <div className="row g-0">*/}
                    {/*            <div className="col-md-4">*/}
                    {/*                <Image*/}
                    {/*                    loader={CloudImageLoader}*/}
                    {/*                    src={robinDanDaraCover}*/}
                    {/*                    alt="..."*/}
                    {/*                    width={135}*/}
                    {/*                    height={210}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-8">*/}
                    {/*                <div className="card-body">*/}
                    {/*                    <h5 className="card-title">Robin dan Dara</h5>*/}
                    {/*                    <p className="card-text">*/}
                    {/*                        Story revolves around a girl and her pilot boyfriend. Are*/}
                    {/*                        they going to end up together? Find out more!*/}
                    {/*                    </p>*/}
                    {/*                    <p className="card-text mb-0">*/}
                    {/*                        <small className="text-muted">*/}
                    {/*                            Genre: Novel, Fiction, Romance, Erotic Romance, Metropop*/}
                    {/*                        </small>*/}
                    {/*                    </p>*/}
                    {/*                    <blockquote className="blockquote mb-0">*/}
                    {/*                        <footer className="blockquote-footer">2018 - 2019</footer>*/}
                    {/*                    </blockquote>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Row>*/}
                </Container>
            </div>
        </div>
    );
};

export default Novel;
