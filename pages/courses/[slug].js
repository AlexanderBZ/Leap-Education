import Head from "next/head";
import Course from "../../components/header/course";
import LessonsContainer from "../../components/course/lessons-container";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function CoursePage() {
  const router = useRouter();
  const { slug } = router.query;
  const formattedSlug = (slug.charAt(0).toUpperCase() + slug.slice(1)).replace(
    "-",
    " "
  );

  const sampleDescription = `Welcome to our course on ${formattedSlug}. In this course we'll start off with a basic intro to the subject and then dive into harder more complex problems at the end. With this course, we'll take you from zero to hero in only a couple hours.`;
  const sampleLessons = [
    {
      id: 1,
      title: "Lesson 1",
      description: "Dive into the subject",
      length: "10:45",
    },
    {
      id: 2,
      title: "Lesson 2",
      description: "In depth graphing",
      length: "9:55",
    },
    {
      id: 3,
      title: "Lesson 3",
      description: "Complex math problems",
      length: "12:20",
    },
    {
      id: 4,
      title: "Lesson 4",
      description: "Wrapping up the course",
      length: "14:40",
    },
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
          title={formattedSlug}
          description={sampleDescription}
          lessons={sampleLessons}
        />
        <LessonsContainer lessons={sampleLessons} />
      </div>
    </Fragment>
  );
}
