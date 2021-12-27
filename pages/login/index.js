import Head from "next/head";
import { Fragment } from "react";
import classes from "./login.module.css";

export default function LogInPage() {
  return (
    <Fragment>
      <Head>
        <title>Leap Education | Login</title>
        <meta
          name="description"
          content="Take the leap and login to access a free world class college-level education"
        />
      </Head>
      <div className={classes.container}>
        <h1>test</h1>
        <p>super cool</p>
      </div>
    </Fragment>
  );
}
