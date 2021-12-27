import Image from "next/image";
import Link from "next/link";
import classes from "./college-paths.module.css";

export default function CollegePaths() {
  return (
    <div className={classes.container}>
      <section>
        <h3>
          Create guided
          <span className={classes.highlight}> College learning paths.</span>
        </h3>
        <p>We want to create in depth videos on:</p>
        <ul>
          <li>Calculus</li>
          <li>Computer Science</li>
          <li>Philosophy</li>
          <li>and more...</li>
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
        <Image src={"/images/welcome/space-1.png"} width={590} height={365} />
      </section>
    </div>
  );
}
