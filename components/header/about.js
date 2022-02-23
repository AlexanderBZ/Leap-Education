import Link from "next/link";
import Image from "next/image";
import classes from "./about.module.css";

export default function AboutHeader() {
  return (
    <div className={classes.container}>
      <section className={classes.text}>
        <h1>
          We want to help
          <span className={classes.highlight}>
            {" millions of people take free college courses"}
          </span>
        </h1>
        <Link href={"/courses/calculus-1"}>
          <button className={classes.learningButton}>Start Learning</button>
        </Link>
      </section>
      <section className={classes.icon}>
        <Image src={"/images/about/planet.png"} width={340} height={340} />
      </section>
    </div>
  );
}
