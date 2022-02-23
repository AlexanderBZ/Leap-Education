import { Fragment } from "react";
import Head from "next/head";
import HomeHeader from "../components/header/home";
import NFTsContainer from "../components/nfts/nfts-container";
import HomeExplanation from "../components/home-explanation/explanations-container";
import JoinBox from "../components/website-explanation/join-box";

export default function Home() {
  // Get token when page loads
  // if (typeof window !== "undefined") {
  //   var token = localStorage.getItem("x-amz-security-token");
  // }

  return (
    <Fragment>
      <Head>
        <title>Leap Education | Free Online Courses, Lessons & Practice</title>
        <meta
          name="description"
          content="Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more."
        />
      </Head>
      <div>
        <HomeHeader />
        {/* <NFTsContainer /> */}
        <HomeExplanation />
        <JoinBox />
      </div>
    </Fragment>
  );
}
