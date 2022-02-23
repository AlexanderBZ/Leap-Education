import Competitions from "./competitions";
import CollegePaths from "../home-explanation/college-paths";
import CommunityDAO from "./community-dao";
import classes from "./explanations-container.module.css";

export default function ExplanationsContainer() {
  return (
    <div className={classes.container}>
      <h2>Your Leap Card helps us...</h2>
      <CollegePaths />
      <CommunityDAO />
      <Competitions />
    </div>
  );
}
