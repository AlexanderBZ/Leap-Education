import { Fragment } from "react";
import Head from "next/head";

export default function WelcomePage() {
  return (
    <Fragment>
      <Head>
        <title>Leap Education | Welcome</title>
        <meta
          name="description"
          content="Leap Education wants to provide everyone with a world class college-level education"
        />
      </Head>
      <div>
        <h1>test</h1>
        <p>cool test</p>
      </div>
    </Fragment>
  );
}
