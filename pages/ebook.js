import React from "react";
import Header from "../components/Header";
import {Container, Row, Col} from "reactstrap";
import Head from "next/head";
import Image from "next/image";

function getKey(){
    key += 1;
    return `formating-key-${key}`;
}

/**
 * 
 * @param {string} _author 
 * @param {string} _title 
 * @param {number} _publishYear 
 * @param {number} _pageCount 
 * @param {string} _ebookFormat 
 * @returns 
 */
function writeBookInfo(_author, _title, _publishYear, _pageCount, _ebookFormat){
    const pgcount = (_pageCount) ? `${_pageCount} pages` : '';
    let ebk = '';
    if(_ebookFormat){
        if(_pageCount) ebk += ", ";
        
        ebk += _ebookFormat;
    }
    return [
        // <b key={getKey()}>{_author}</b>,
        // <br key={getKey()} />,
        // _title.toLocaleUpperCase(),
        // <br key={getKey()} />,
        `Originally published in ${_publishYear}`,
        <br key={getKey()} />,
        `${pgcount}${ebk}`
    ]
}
const kindleEdition = 'Kindle edition';
const ebook = "ebook"
const kindle_ebook = `${kindleEdition}, ${ebook}`

const books = [
    {
        title: 'SELL LIKE CRAZY - Sabri Suby',
        source: require('../assets/images/books/sellLikeCrazy.jpg'),
        texts: [
            writeBookInfo('Sabri Suby', 'SELL LIKE CRAZY', 2019, 307, kindle_ebook),
            '“The market doesn\'t pay you to have the best product or service. It rewards you for solving problems.',
            '“Your focus should be on intimately understanding your market and your prospects\' deepest desires, pains, fears, hopes, and dreams. You need to know them better than any of your competitors, and then craft marketing messages that effectively communicate how you can solve these problems.', 
            '“The ability to write ads and marketing messages that sell is by far the most lethal money-making skill you could ever hope to acquire. ', 
            '“The key is to install a system that: Attracts Educate Nurtures Gets Prospects.', 
            'In "Sell like crazy," Sabri suby, a master of digital marketing and sales, laying out an explosive blueprint that demystifies the complexities of selling in the digital age. Whether you\'re a seasoned entrepreneur, a startup hopeful, or a sales professional striving to hit your numbers, this book equip you with the tools and tactics necessary to thrive in today\'s hyper-competitive marketplace by thinking like a fearless salesperson ready to sell like crazy.', 
            'Order now!'
        ]
    },
    {
        title: 'Mastery - George Leonard',
        source: require('../assets/images/books/masteryKeySuccess.jpg'),
        texts: [
            writeBookInfo('George Leonard', 'Mastery', 1991, 180, kindle_ebook),
            '"Mastery" by George Leonard is a guide to achieving excellence in any field. The author emphasizes the importance of patience, practice, and embracing failure as part of the learning process. The author talks a lot about Aikido.The story about Aikido does help in understanding about Mastery and how we can implement it in our day to day lives. Order now!'
        ]
    },
    {
        title: 'Influence: The Psychology of Persuasion - Robert B. Cialdini',
        source: require('../assets/images/books/influencePsychologyPersusasion.jpg'),
        texts: [
            writeBookInfo('Robert B. Cialdini', 'Influence: The Psychology of Persuasion', 1984, 320, kindle_ebook),
            'The book explains the psychology of why people say “yes” and how to apply these understandings. Dr. Robert Cialdini is the expert in the field of influence and persuasion. His thirty five years of rigorous, and evidence based research along. Influence, the classic book on persuasion, has sold over three million copies and has been translated into thirty lianguages. It has been listed on the New York Times Best Seller list and Fortune lists it in their “75 Smartest Business Books”. It has been mentioned in 50 Psychology Classics. Here are the 6 main principles explored in this book: Reciprocation, Commitment & Consistency, Social Proof, Authority, Liking, Scarcity. Influence is a comprehensive guide to using these principles effectively to amplify your ability to change the behavior of others. You\'ll learn the six universal principles of influence and how to use them to become a skilled persuader how to apply these principles ethically in business and everyday situations. Order now!'
        ]
    },
    {
        title: 'The Art of War - Sun Tzu',
        source: require('../assets/images/books/artOfWar.jpg'),
        texts: [
            writeBookInfo('Sun Tzu', 'The Art of War', 1910, 66, ebook),
            '“The Art of War” was written by a Chinese general named Sun Tzu more than 2,500 years ago. Revered for its practical advice on warfare, the lessons here apply to anyone who leads others. Have you ever wished you had a master strategist to guide you through tough challenges in work or life? The Art of War by Sun Tzu is one of the most enduring guides on strategy and warfare, offering timeless insights on military strategies and competitive advantage. Order now!'
        ]
    },
    {
        title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change - Stephen R. Covey',
        source: require('../assets/images/books/7habits.jpg'),
        texts: [
            writeBookInfo('Stephen R. Covey', 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change', 1989, 219, ebook),
            '“The 7 Habits of Highly Effective People” is a self-help and personal development book written by Stephen R. Covey. Covey\'s belief that the way we see the world is entirely based on our own perceptions. Our effectiveness is a compilation of habits. Our habits are a compilation of knowledge, skill, and desire. And Covey introduces dimensions of renewal: physical, mental, spiritual, and social/emotional. By nurturing these aspects of life, individuals can enhance their overall well being and sustain long term effectiveness.',
            'Order now!'
        ]
    },
    {
        title: 'Poor Charlie\'s Almanack - Charlie Munger',
        source: require('../assets/images/books/poorCharliesAlmanack.jpg'),
        texts: [
            writeBookInfo('Charlie Munger', 'Poor Charlie\'s Almanack', 2005, 552, kindle_ebook),
            'Particularly relevant for those interested in business and finance, but as he makes clear in many of his speeches (transcripts included in the book), it should be relevant for all, from lawyers to economists. Highly recommend. Order now!'
        ]
    },
    {
        title: 'The 4-Hour Workweek - Timothy Ferriss',
        source: require('../assets/images/books/4HourWorkweek.jpg'),
        texts: [
            writeBookInfo('Timothy Ferriss', 'The 4-Hour Workweek ', 2007, 308, ebook),
            '“The 4-Hour Work Week” is all about how to change the way readers look at how they live and work and why they should challenge old assumptions. The author writes from a unique vantage point. He created a life and a career he chose out of consistently questioning the traditional assumptions about life and work. He writes in detail about his challenges, failures, and successes candidly and readers can see in detail his transformation using this new life view. His emphasis is on viewing time and mobility as the ultimate currency. It\'s not about how much money can be made, it\'s about how having the time and the freedom to live a good life without being broke is possible. The providing a step by step plan for readers to learn how to take back control of their lives. Order now!'
        ]
    },
    {
        title: 'The Adweek Copywriting Handbook: The Ultimate Guide to Writing Powerful Advertising and Marketing Copy from One of America\'s Top Copywriters - Joseph Sugarman',
        source: require('../assets/images/books/adweekCopywriting.jpg'),
        texts: [
            writeBookInfo('Joseph Sugarman', 'The Adweek Copywriting Handbook: The Ultimate Guide to Writing Powerful Advertising and Marketing Copy from One of America\'s Top Copywriters', 2006, 361, kindle_ebook),
            'Joseph Sugarman, author of the bestselling Success Forces, is known throughout the advertising world as a copywriting legend and role model. The Adweek Copywriting Handbook book are designed to present interesting, insightful book for the general business reader and for professionals in the worlds of media, marketing, and advertising. Starting at the very beginning of the process, the book shows copywriters how to get prepared to write on a product before moving on to the act of writing itself. New to marketing? been in the business? Read this book. Order now!'
        ]
    },
    {
        title: 'Think and Grow Rich - Napoleon Hill',
        source: require('../assets/images/books/thinkGrowRich.jpg'),
        texts: [
            writeBookInfo('Napoleon Hill', 'Think and Grow Rich ', 1937, 235, kindle_ebook),
            '“Think and Grow Rich” is a classic work on how to lead a successful life. It was written at the commission of Andrew Carnegie and is based on interviews with men such as Henry Ford, J.P. Morgan, and John D. Rockefeller, the business titans of the early 20th century. This all-time best-seller lays out the steps needed to unleash one\'s potential, focusing on building individual self-confidence and a clear set of goals. Each chapter addresses one of the author\'s principles to leading a meaningful and productive life. The main idea of the Think and Grow Rich summary is to control your destiny by controlling your mind. Each chapter is full of insights that can change your perspective on people, psychology, money, and personal growth, regardless of your profession or business. Here we will explore the key ideas and concepts presented in Think and Grow Rich and how they can be applied to our lives today. Order now!'
        ]
    },
    {
        title: 'Jab, Jab, Jab, Right Hook - Gary Vaynerchuk',
        source: require('../assets/images/books/jabRightHook.jpg'),
        texts: [
            writeBookInfo('Gary Vaynerchuk', 'Jab, Jab, Jab, Right Hook', 2013, 224, kindle_ebook),
            '“Jab, Jab, Jab, Right Hook” explains how managers, marketers and small businesses can capitalize on social media platforms to increase their public profile. It offers practical advice and examples for crafting effective marketing campaigns on different platforms. Order now!'
        ]
    },
    {
        title: 'Rewire Your Anxious Brain: How to Use the Neuroscience of Fear to End Anxiety, Panic, and Worry - Catherine M. Pittman, Elizabeth M. Karle',
        source: require('../assets/images/books/rewireYourAnxiousBrain.jpg'),
        texts: [
            writeBookInfo('Catherine M. Pittman, Elizabeth M. Karle', 'Rewire Your Anxious Brain: How to Use the Neuroscience of Fear to End Anxiety, Panic, and Worry', 2015, 232, kindle_ebook),
            '“Rewire Your Anxious Brain” Author Elizabeth Karle and psychologist Catherine Pittman offer a unique, evidence based solution to overcoming anxiety based in cutting edge neuroscience and research. In the book, you will learn how the amygdala and cortex (both important parts of the brain). In the book, Pittman and Karle make it simple by offering specific examples of how to manage fear by tapping into both of these pathways in the brain. As you read, you’ll gain a greater understanding how anxiety is created in the brain, and as a result, you will feel empowered and motivated to overcome it. Order now!'
        ]
    },
    {
        title: 'You Are A Writer - Jeff Goins',
        source: require('../assets/images/books/youAreWriter.jpg'),
        texts: [
            writeBookInfo('Jeff Goins', 'You Are A Writer', 2012, 158, kindle_ebook),
            '“You Are a Writer” by Jeff Goins outlines adopting the confidence and identity of an author. It discusses confronting insecurities about failure and rejection, as well as proven strategies for writing habitually and honing your unique voice. Delves into building a writer\'s platform and preparing for publication in today\'s digital landscape. Goins explores creating an online brand presence, and nurturing meaningful connections. He also emphasizes embracing the business side of writing with topics like determining appropriate fees, balancing creative and commercial responsibilities, and leaving a lasting impact with your work. Order now!'
        ]
    },
    {
        title: 'The Everything Store: Jeff Bezos and the Age of Amazon - Brad Stone',
        source: require('../assets/images/books/everythingStore.jpg'),
        texts: [
            writeBookInfo('Brad Stone', 'The Everything Store: Jeff Bezos and the Age of Amazon', 2013, 306, ebook),
            '“The everything store” in this book begins by introducing Jeff Bezos, a brilliant and driven individual . Through meticulous research and extensive interviews, Brad stone provides readers with a deep understanding of the company\'s origins, growth, impact on various industries, glimpse into Bezos\'s early life and his formative years that shaped his entrepreneurial mindset. Order now!'
        ]
    },
    {
        title: 'Rich Dad Poor Dad - Robert Kiyosaki',
        source: require('../assets/images/books/richDadPoorDad.jpg'),
        texts: [
            writeBookInfo('Robert Kiyosaki', 'Rich Dad Poor Dad', 1997, 222, kindle_ebook),
            'The author Robert T. Kiyosaki explains key concepts of financial management by comparing and contrasting the financial philosophies, Rich Dad, Poor Dad is one of the most important books on personal finance that introduces a new perspective on wealth management. Order now!'
        ]
    },
    {
        title: 'MONEY Master the Game - Tony Robbins',
        source: require('../assets/images/books/moneyMasterGame.jpg'),
        texts: [
            writeBookInfo('Tony Robbins', 'MONEY Master the Game', 2014, 688, kindle_ebook),
            '“Money Master the Game” by Tony Robbins is the ultimate guide on how to build a secure financial future. Robbins provides a detailed account of what works and what doesn\'t. He distills financial planning into 7 fundamental principles. Great book for anyone seeking to know their way around money. Order now!'
        ]
    },
    {
        title: 'Awaken the Giant Within - Tony Robbins',
        source: require('../assets/images/books/awakenGiantWithin.jpg'),
        texts: [
            writeBookInfo('Tony Robbins', 'Awaken the Giant Within', 1991),
            'Awaken the Giant Within is a comprehensive self-help book designed for people who want to feel in control of all aspects of their lives and fulfill their greatest potential in their relationships, career, finances, and personal lives. He indicates that these lessons are available for anyone to apply regardless of background or past failures.',
            'This book teaches the principles and practices. Strategies to take control of thoughts, and learn how to apply the self improvement skills you\'ve learned. Order now!'
        ]
    },
    {
        title: 'Bigger Leaner Stronger - Michael Matthews',
        source: require('../assets/images/books/biggerLeanerStronger.jpg'),
        texts: [
            writeBookInfo('Michael Matthews', 'Bigger Leaner Stronger', 2011),
            '“Bigger Leaner Stronger” by Michael Matthews is a science-based guide to achieving a lean and strong physique. The book is tailored to individual goals, whether it\'s building muscle, losing fat, or increasing strength. By following the evidence based principles presented in the book, readers can work toward their fitness objectives and experience tangible results. Order now!'
        ]
    },
    {
        title: 'DotCom Secrets: The Underground Playbook for Growing Your Company Online - Rusell Brunson',
        source: require('../assets/images/books/dotcomSecrets.jpg'),
        texts: [
            writeBookInfo('Rusell Brunson', 'DotCom Secrets: The Underground Playbook for Growing Your Company Online', 2011),
            'DotCom Secrets is not just another "how-to" book on internet marketing. In this updated edition, Russell Brunson, CEO and co-founder of software company ClickFunnels, reveals his greatest secrets to generating leads and selling products and services after running tens of thousands of his own split tests. Stop repelling potential customers. Implement these processes, funnels, frameworks, and scripts now so you can fix your funnel, turn it into the most profitable member of your team, and grow your company online. Order now!'
        ]
    },
    {
        title: 'Mastering Yourself, How to Align Your Life With Your True Calling & Reach Your Full Potential - Corey Wayne',
        source: require('../assets/images/books/masteringYourself.jpg'),
        texts: [
            writeBookInfo('Corey Wayne', 'Mastering Yourself, How to Align Your Life With Your True Calling & Reach Your Full Potential', 2018),
            'This book teaches how to get any job or career you want. How you can get the upper hand in any personal or professional negotiation. It will teach problem solving mindsets and skillsets that will enable you to overcome any obstacle, challenge or setback. The ultimate time management strategy that will help you maximize the use of your time, enable you to focus on your core competencies and reach your goals in the quickest most efficient way possible. Order now!'
        ]
    },
    {
        title: 'Sam Walton: Made In America - Sam Walton, John Huey',
        source: require('../assets/images/books/madeInAmerica.jpg'),
        texts: [
            writeBookInfo('Sam Walton, John Huey', 'Sam Walton: Made In America', 1993),
            'Meet a genuine American folk hero cut from the homespun cloth of America\'s heartland: Sam Walton, who parlayed a single dime store in a hardscrabble cotton town into Wal-Mart, the largest retailer in the world.  The undisputed merchant king of the late twentieth century, Sam never lost the common touch.  Here, finally, inimitable words.  Genuinely modest, but always sure if his ambitions and achievements.  Sam shares his thinking in a candid, straight-from-the-shoulder style. In a story rich with anecdotes and the "rules of the road" of both Main Street and Wall Street, Sam Walton chronicles the inspiration, heart, and optimism that propelled him to lasso the American Dream. Order now!'
        ]
    },
    {
        title: 'The Theory of Everything - Stephen W. Hawking',
        source: require('../assets/images/books/theoryOfEverything.jpg'),
        texts: [
            writeBookInfo('Stephen W. Hawking', 'The Theory of Everything', 2002),
            '“The Theory of Everything” In this compelling book, Hawking challenges the boundaries of our understanding by exploring the profound mysteries of the universe. From the vast expanses of space time to the intricate workings of black holes, Hawking takes readers on an exhilarating journey through the fundamental theories that govern our reality. With his characteristic clarity and simplicity, he seeks to answer the ultimate question that has puzzled scholars for centuries: Is it possible to develop a single theory that explains everything in the universe? Perfect for both science enthusiasts and novices, this book not only illuminates the complexities of the cosmos but also inspires awe at the wonders that lie within our grasp. A Theory of Everything is a must read for anyone who wants to understand the role of faith in a world where science and technology govern our lives. Order now!'
        ]
    },
    {
        title: 'The Selfish Gene - Richard Dawkins',
        source: require('../assets/images/books/selfishGene.jpg'),
        texts: [
            writeBookInfo('Richard Dawkins', 'The Selfish Gene', 1976),
            '“The Selfish Gene”, Dawkins argues for the gene as the basic unit of evolution. He claims that organisms are “survival shells” for the “replicators” within us. He writes for the scientist looking for a new idea and for the layman just looking to learn more by explaining his theory in a way that appeals to all. How does reproduction work? How have humans evolved over the years? These questions bug the minds of even the greatest philosophers, but you can find answers in this book. Order now!'
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
                    <title>Koranovel/Ebook</title>
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
