import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Loader from "react-loader-spinner";

const Blog = () => {
  return (
    <div
      className={"d-flex vh-100 text-center text-white"}
      style={{ backgroundColor: "#FFA1A9" }}
    >
      <div
        className={
          styles.coverContainer + " d-flex w-100 h-100 p-3 mx-auto flex-column"
        }
      >
        <Header />
        <main style={{ marginTop: "24px" }}>
          <div className="flex-justify-center">
            <Loader type="Hearts" color="#ffff60" height={75} width={75} />
            <Loader type="Hearts" color="#ffff60" height={75} width={75} />
          </div>
          <h1>On Progress</h1>
        </main>
      </div>
    </div>
  );
};

export default Blog;
