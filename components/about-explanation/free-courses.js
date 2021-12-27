import Image from "next/image";
import Link from "next/link";
import classes from "./free-courses.module.css";

export default function FreeCourses() {
  return (
    <div className={classes.container}>
      <section>
        <h3>
          College level courses
          <span className={classes.highlight}> should be free.</span>
        </h3>
        <p>
          Education is a human right. We believe in a free, world class
          education for anyone, anywhere in the world.
        </p>
        <Link href={"/courses"}>
          <a>
            <div className={classes.visit}>
              <h5>Start Learning</h5>
              <Image src={"/diagonal-arrow.svg"} width={37} height={37} />
            </div>
            <hr />
          </a>
        </Link>
      </section>
      <section className={classes.image}>
        <Image src={"/images/welcome/space-1.png"} width={590} height={438} />
      </section>
    </div>
  );
}
