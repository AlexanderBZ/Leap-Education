import AboutHeader from "../../components/header/about";
import Community from "../../components/about-explanation/community";
import FreeCourses from "../../components/about-explanation/free-courses";
import JoinBox from "../../components/website-explanation/join-box";
import ValuesContainer from "../../components/about-explanation/values-container";
import { Fragment } from "react";
import Head from "next/head";
import classes from "./about.module.css";

export default function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>Leap Education | About Us</title>
        <meta
          name="description"
          content="Leap Education wants to provide a free world class college-level education for everyone."
        />
      </Head>
      <div className={classes.container}>
        <div className={classes.aboutHeader}>
          <AboutHeader />
        </div>
        <FreeCourses />
        <Community />
        <JoinBox />
        <ValuesContainer />
      </div>
    </Fragment>
  );
}
