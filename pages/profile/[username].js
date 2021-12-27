import Head from "next/head";
import { Fragment, useState, useEffect } from "react";

export default function ProfilePage() {
  return (
    <Fragment>
      <Head>
        <title>{`Leap Education | @alexander.zwerner profile, lists, and reviews`}</title>
        <meta name="description" content={`See alexander.zwerner's profile`} />
      </Head>
      <div>
        <h1>test</h1>
        <p>super cool</p>
      </div>
    </Fragment>
  );
}
