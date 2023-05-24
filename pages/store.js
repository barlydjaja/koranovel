import React from "react";
import Header from "../components/Header";
import {Container} from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from 'react-player'

const Store = () => {
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
                <div className='mb-3'>
                    <Header/>
                </div>
                <h6 style={{textAlign: 'left'}} className='mb-3 mt-4'>
                    Free Shipping by Koranovel
                    <div style={{fontSize: '12px'}}>
                        Order from telegram <a className='font-weight-bold text-decoration-none' href='https://t.me/koranovelstore'>koranovelstore</a>
                    </div>
                </h6>
                <Container fluid="sm">
                    <div className="mb-5">
                        <span>
                            Leather Back Cover For
                            iPhone 7,8, X,XS,11,11 pro, 12,12pro, 13,13pro, 13pro max.
                            SmartPhone Case
                        </span>
                        <div>
                            <div>
                                <Image src={require('../components/store/chapter1/IMG_0601.jpeg')} alt="..."
                                       width={200}
                                       height={250}
                                       className={"mb-3"}
                                />
                            </div>

                            <div>
                                <Image src={require('../components/store/chapter1/IMG_0600.jpeg')} alt="..."
                                       width={200}
                                       height={250}
                                       className={"mb-3"}
                                />
                            </div>

                            <div>
                                <Image src={require('../components/store/chapter1/IMG_0599.jpeg')} alt="..."
                                       width={200}
                                       height={250}
                                />
                            </div>
                            <ReactPlayer loop muted playing url={'/chapter1.mp4'} width={240} height={240} style={{margin: '0 auto'}}/>
                        </div>
                    </div>

                    <div className="mb-5">
                        <span>
                            Luxury Offical Original Liquid Silicone
                            Phone Case For Iphone 7,8, X,XS,11,11 pro, 12,12pro, 13,13pro, 13pro max.
                        </span>
                        <div>
                            <Image src={require('../components/store/chapter2/B0DBD7EF-40E8-4A95-A400-0F1CE7246D16.jpeg')} alt="..."
                                   width={280}
                                   height={250}
                                   className={"mb-3"}
                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <span>
                            Wholesale gel case skin cover iPhone 7,8, X,XS,11,11 pro, 12,12pro, 13,13pro, 13pro max.
                            Pink, Green.
                        </span>
                        <div>
                            <ReactPlayer loop muted playing url={'/chapter3.mp4'} width={240} height={240} style={{margin: '0 auto'}}/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Store;
