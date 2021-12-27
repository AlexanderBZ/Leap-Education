import classes from "./join-box.module.css";

export default function JoinBox() {
  return (
    <div className={classes.container}>
      <p>Take the Leap, start learning today...</p>
      <div className={classes.buttons}>
        <button className={classes.learningButton}>Start Learning</button>
        <button className={classes.crowdfundButton}>View Crowdfund</button>
      </div>
    </div>
  );
}
