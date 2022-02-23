import Link from "next/link";
import classes from "./join-box.module.css";

export default function JoinBox() {
  return (
    <div className={classes.container}>
      <p>Take the Leap, start learning today...</p>
      <div className={classes.buttons}>
        <Link href={"/courses/calculus-1"}>
          <button className={classes.learningButton}>Start Learning</button>
        </Link>
        <button className={classes.crowdfundButton}>Job Opportunities</button>
      </div>
    </div>
  );
}
