import React from "react";
import Header from "../components/Header";
import {Container, Row, Col} from "reactstrap";
import Head from "next/head";
import Image from "next/image";

const books = [
    {
        title: 'You Are A Writer - Jeff goins 4/5',
        source: require('../assets/images/books/youAreWriter.jpg'),
        texts: [
            `"In You Are a Writer, Jeff Goins shares the truth about writing. He provides the tools and insights you need to build your platform, developan audience, and make meaningful connections. No writer should embark on his or her writing journey without reading this first!"`,
            '-Michael Hyatt | Author, Platform: “Get Noticed in a Noisy World”.',
            'Becoming a writer begins with a simple but important belief. You are a writer; you just need to write. In You Are a Writer, Teff Goins shares his own story self-doubt and what it took for him to become a professional writer. He gives you practical steps to improve your writing, get published in magazines, and build a platform that puts you in charge. This book will help you fall back in love with writing and build an audience who shares your love. It\'s about living the dream of a life dedicated to words.\n' +
            'AND IT ALL BEGINS WITH YOU.'
        ]
    },
    {
        title: 'Think And Grow Rich 4.7/5',
        source: require('../assets/images/books/thinkGrowRich.jpg'),
        texts: [
            'The bestselling success book of all time Now revised and updated for life in the twenty-first century.',
            'Every chapter of this book mentions the moneymaking secret that has made fortunes for more than five hundred exceedingly wealthy people whom I have carefully analyzed over a long period of years. The book contains the secret, which has been put to a practical test by thousands of people from almost every walk of life. The secret to which I refer has been mentioned no fewer than a hundred times throughout the book. It has not been directly named, for it seems to work more successfully when it is merely uncovered and left in sight, where those who are ready and searching for it may pick it up.',
            'If you are ready to put it to use, you will recognize this secret at least once in every chapter. I wish I could tell you how you will know if you are ready, but that would deprive you of much of the benefit you will receive when you make the discovery in your own way.',
            '-Napoleon Hill, from the Preface'
        ]
    },
    {
        title: 'The Theory of Everything - Stephen W. Hawking 4.8/5',
        source: require('../assets/images/books/theoryOfEverything.jpg'),
        texts: [
            'STEPHEN HAWKING is widely believed to be one of the world\'s greatest minds: a brilliant theoretical physicist whose work helped to reconfigure models of the universe and to rede fine what\'s in it. Imagine sitting in a room listening to Hawking discuss these achievements and place them in historical context. It would be like hearing Christopher Columbus on the New World. Hawking presents a series of seven lectures, covering everything from big bang to black holes to string theory, that capture not only the brilliance of Hawking\'s mind but his characteristic wit as well. Of his research on black holes, which absorbed him for more than a decade, he says, "It might seem a bit like looking for a black cat in a coal cellar." Hawking begins with a history of ideas about the universe, from Aristotle\'s determination that the Earth is round to Hubble\'s discovery, over 2000 years later, that the universe is expanding, Using that as a launching pad, he explores the reaches of modern physics, including theories on the origin of the universe ( the big bang ), the nature of black holes, and space-time. Finally, he poses the questions left unanswered by modern physics, especially how to combine all the partial theories into a "unified theory of everything" "If we find the answer to that," he claims, "it would be the ultimate triumph of human reason." A great popularizer of science as well as a brilliant scientist, Hawking believes that advances in theoretical science should be “understandable in broad principle by everyone, not just a few scientists." In this book, he offers a fascinating voyage of discovery about the cosmos and our place in it. It is a book for anyone who has ever gazed at the night sky and wondered what was up there and how it came to be.'
        ]
    },
    {
        title: 'The Selfish Gene - Richard Dawkins 4.7/5',
        source: require('../assets/images/books/selfishGene.jpg'),
        texts: [
            'The Selfish Gene caused a wave of excitement among biologists and the general public when it was first published in 1976. Its vivid rendering of a gene\'s eye view of life, in lucid prose, gathered together the strands of thought about the nature of natural selection into a conceptual framework with far-reaching implications for our understanding of evolution. Time has confirmed its significance. Intellectually rigorous, yet written in non-technical language, "The Selfish Gene" is widely regarded as a masterpiece of science writing, and its insights remain as relevant today as on the day it was published.'
        ]
    },
    {
        title: 'The Everything Store: Jeff Bezos and the Age of Amazon 4.8/5',
        source: require('../assets/images/books/everythingStore.jpg'),
        texts: [
            'Jeff Bezos is one of the most visionary, focused, and tenacious innovators of our era, and like Steve Jobs he transforms and invents industries. Brad Stone captures his passion and brilliance in this well-reported and compelling narrative.',
            '“The Everything Store is a revelatory read for everyone, those selling and those sold to, who wants to understand the dynamics of the new digital economy. If you\'ve ever one-clicked a purchase, you must read this book.”\n-STEVEN LEVY, AUTHOR OF HACKERS AND IN THE PLEX'
        ]
    },
    {
        title: 'The Art of War 4.5/5',
        source: require('../assets/images/books/artOfWar.jpg'),
        texts: [
            'Sun Tzu on The Art of War Is an ancient Chinese military treatise dating from the Late Spring and Autumn Period (roughly 5th century BC). The work, which is attributed to the ancient Chinese military strategist Sun Tzu (“Master Sun", also spelled Sunzi), is composed of 13 chapters. Each one is devoted to an aspect of warfare and how it applies to military strategy and tactics. For almost 1,500 years it was the Icad text in an aotholor that would be formalised as the seven Militarv Classics by Emperor Shenzong of Song in 1080. The Art of War remains the most influential strategy text in East Asian warfare and has influenced both Eastern and Western military thinking, business tactics, legal strategy, lifestyles and beyond. The book was translated into French and published in 1772 (re-published in 1782) by the French Jesuit Jean Joseph Marie Amiot. A partial translation into English was attempted by British officer Everard Ferguson Calthrop in 1905 under the title The Book of War. The first annotated English translation was completed and published by Lionel Giles in 1910. Military and political leaders such as the Chinese communist revolutionary Mao Zedong, Japanese daimyó Takeda Shingen, Vietnamese general Vö Nguyên Giáp, and American military general Norman Schwarzkopf Jr. have drawn inspiration from the book'
        ]
    },
    {
        title: 'The Adweek Copywriting Handbook: The Ultimate Guide to Writing Powerful Advertising and Marketing Copy from One of America\'s Top Copywriters / Edition 1.',
        source: require('../assets/images/books/adweekCopywriting.jpg'),
        texts: [
            'A fun and authoritative guide to writing masterful copy.',
            'Great copy is the heart and soul of the advertising business, whether it\'s for print, television, rudio, or any other medium. In The Acreek Copywriting Handbook, legendary copywriter and ad man Joseph Sugarman\n' +
            '\n' +
            'provides proven guidelines and expert advice on what it takes to write eopy that will entice, motivate, and move customers to buy, Sugarran walks you step by step through the entire copywriting process, from getting prepared to researching products and markets to gesting ideas down on paper and polishing them to a brilliant sheen. He explains the vital elements that make great copy and explores the cmotional triggers that convince consumers so buy. Sugarman gives you all the tools and tactics you need to write the same kind of effective selling copy that has brought him fame and fortunc. For anyone who wants to break into the advertising business, or ad pros who just want to get better at what they do, this is the ultimate companion resource. Complete with real examples of high-quality copy for various media, this practical and authoritative guide will tell you everything you need to know to write great copy, and get ahead in the cutthroat world of advertising.',
            'JOSEPH SUGARMAN, author of the bestselling Succexs forces, is known throughout the advertising world as copywritine legend and role model. His ads have moved millions of customers to reach for their wallets, and JS&A Catalog was once America\'s largest single direct mail catalog of space-age products. He has given copywnting seminars throughout the United States, Europe. Asia, and Australia.'
        ]
    },
    {
        title: 'The 7 Habits of Highly Effective People - Stephen R.Covey \n' +
            '\n',
        source: require('../assets/images/books/7habits.jpg'),
        texts: [
            '“This remarkable book will be my gift to everyone I know."',
            'In The 7 Habits of Highly Effective People, author Stephen R Covey presents a holistic, integrated, principle centered approach for solving personal and professional problems. Will penetrating insights and pointed anecdotes, Covey reveals a step by-step pathway for living with fairness, integrity, honesty, and human dignity, principles that give us the security to adapt to change and the wisdom and power to take advantage of the opportunities that change creates.',
            '"Stephen Covey\'s The 7 Habits of Highly Effective People played a major role in the development of Saturn\'s operating systems and philosophy. Our commitment to quality and to our customers has its roots in The 7 Habits."',
            '#1 National Bestseller'
        ]
    }
]

const EBook = () => {
    return (
        <div
            className="d-flex text-center text-white"
            style={{backgroundColor: "#E9765B"}}
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
                <h6 style={{textAlign: 'left'}} className='mb-5 mt-4'>
                    <strong>Price list</strong><br />
                    $1 US / Book <br />
                    Rp 15,000 / Book
                    <div style={{fontSize: '12px'}} className='mt-3'>
                        Order from telegram <a className='font-weight-bold text-decoration-none' href='https://t.me/koranovelstore'>koranovelstore</a>
                    </div>
                </h6>
                <Container fluid="sm">
                    {
                        books.map(book => (
                            <div className="mb-5 border-bottom" key={book.title}>
                                <div className="h5 mb-3">{book.title}</div>
                                <Image src={book.source} alt={'img-' + book.title} className='mb-3'/>
                                {book.texts.map(text => (
                                    <div className='mb-4' key={text} style={{textAlign: 'left'}}>{text}</div>
                                ))}
                            </div>
                        ))
                    }
                </Container>
            </div>
        </div>
    );
};

export default EBook;
