import Image from "next/image";
import Link from "next/link";
import classes from "./competitions.module.css";

export default function Competitions() {
  return (
    <div className={classes.container}>
      <section>
        <h3>
          Help you get a
          <span className={classes.highlight}> Job (All for free)</span>
        </h3>
        <p>After completing courses we'll help you:</p>
        <ul>
          <li>Find a job that fits your interests</li>
          <li>Contact employers</li>
          <li>Kill it in their interview</li>
        </ul>
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
        <Image src={"/images/welcome/space-3.png"} width={522} height={390} />
      </section>
    </div>
  );
}
