import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Typed from "react-typed";
import Link from "next/link";
import ActiveLink from "../components/ActiveLink";
import Header from "../components/Header";

export default function Home() {
  return (
    <div
      className={"d-flex vh-100 text-center text-white"}
      style={{ backgroundColor: "#FFA1A9" }}
    >
      <Head>
        <title>Koranovel</title>
        <meta name="Home" content="Koranovel Official Website" />
        <meta
          name="description"
          content="This is a website, owned by KGM, will be filled with her novel collection that you can read for free! Come and Check us out!"
        />
        <meta name="keywords" content="Novel, Fantasy, True Story," />
        <meta name="author" content="Kartika Gema Mardika" />
      </Head>
      <div
        className={
          styles.coverContainer + " d-flex w-100 h-100 p-3 mx-auto flex-column"
        }
      >
        <Header />
        <main className="px-3 body">
          <div
            style={{
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* {showMessage()} */}
          </div>
          <h1>
            <Typed
              strings={["Welcome to Koranovel"]}
              typeSpeed={50}
              // backSpeed={20}
              showCursor={false}
            />
          </h1>
          <div className="homeBodyText">
            <h4 className="lead">
              <Typed
                strings={[
                  "koranovel.com consist of our records and my own personal records. For those who ends up here, please kindly enjoy the website.",
                ]}
                startDelay={2100}
                typeSpeed={30}
              />
            </h4>
            <h3 className="lead">
              <Typed
                strings={["Keep Calm and Enjoy Reading"]}
                startDelay={7500}
                typeSpeed={30}
                showCursor={false}
              />
            </h3>
            <h4 className="lead">
              <Typed
                strings={["- Kartika G.M. -"]}
                startDelay={8500}
                typeSpeed={100}
                showCursor={false}
              />
            </h4>
          </div>
          <Link href="https://blog.koranovel.com">
            <a className={`btn btn-lg ${styles.btnPrimary} text-white`}>
              Kara Blog
            </a>
          </Link>
        </main>

        <footer className={"mt-auto text-white-50"}>
          <p>Support Website by Barly &copy; 2021 </p>
        </footer>
      </div>
    </div>
  );
}
