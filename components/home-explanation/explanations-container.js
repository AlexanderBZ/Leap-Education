import Competitions from "./competitions";
import CollegePaths from "./college-paths";
import CommunityDAO from "./community-dao";
import classes from "./explanations-container.module.css";

export default function ExplanationsContainer() {
  return (
    <a>
      <hr className={classes.divider} />
      <div className={classes.container}>
        <h2>Leap Education courses will help you...</h2>
        <CollegePaths />
        <CommunityDAO />
        <Competitions />
      </div>
    </a>
  );
}
