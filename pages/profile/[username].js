import Head from "next/head";
import { Fragment, useState, useEffect } from "react";

export default function ProfilePage() {
  if (profile) {
    return (
      <Fragment>
        <Head>
          <title>{`Leap Education | @alexander.zwerner profile, lists, and reviews`}</title>
          <meta
            name="description"
            content={`See alexander.zwerner's profile`}
          />
        </Head>
        <div>
          <Profile user={profile} owner={false} />
        </div>
      </Fragment>
    );
  } else {
    return <Loading owner={false} />;
  }
}
