import Login from "../../components/authentication/auth-form";
import Image from "next/image";
import Head from "next/head";
import { Fragment } from "react";
import classes from "./login.module.css";

export default function SignUpPage() {
  return (
    <Fragment>
      <Head>
        <title>Leap Education | Login</title>
        <meta
          name="description"
          content="Leap Education wants to provide a free world class college-level education to everyone. Login to see your progress through our courses."
        />
      </Head>
      <div className={classes.container}>
        <Login loginPage={false} />
      </div>
    </Fragment>
  );
}
