import Head from "next/head";
import Course from "../../components/header/course";
import LessonsContainer from "../../components/course/lessons-container";
import { Fragment } from "react";

export default function CoursePage() {
  const sampleDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.`;
  const sampleLessons = [
    { id: 1, title: "test", description: "this is cool", length: "10:45" },
    { id: 2, title: "test", description: "this is cool", length: "10:45" },
    { id: 3, title: "test", description: "this is cool", length: "10:45" },
    { id: 4, title: "test", description: "this is cool", length: "10:45" },
  ];

  return (
    <Fragment>
      <Head>
        <title>Leap Education | Math Course</title>
        <meta name="description" content="Learn college level math" />
      </Head>
      <div>
        <Course
          cover={"/images/covers/math.png"}
          title={"Calculus 3"}
          description={sampleDescription}
          lessons={sampleLessons}
        />
        <LessonsContainer lessons={sampleLessons} />
      </div>
    </Fragment>
  );
}
