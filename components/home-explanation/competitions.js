import Image from "next/image";
import Link from "next/link";
import classes from "./competitions.module.css";

export default function Competitions() {
  return (
    <div className={classes.container}>
      <section>
        <h3>
          Hold competitions for
          <span className={classes.highlight}> Learners</span>
        </h3>
        <p>
          We want to help members put what they have learned to use through:
        </p>
        <ul>
          <li>Bounties</li>
          <li>Jobs</li>
          <li>Community projects</li>
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
