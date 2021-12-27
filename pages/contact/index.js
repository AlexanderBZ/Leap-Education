import Head from "next/head";
import { Fragment } from "react";
import classes from "./contact.module.css";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Leap Education | Contact Us</title>
        <meta
          name="description"
          content="Want to partner with us or have feedback? Contact us here."
        />
      </Head>
      <div className={classes.container}>
        <h1>Contact Page</h1>
        <p>Contact us via our email: alexander@leapeducation.com</p>
      </div>
    </Fragment>
  );
}
