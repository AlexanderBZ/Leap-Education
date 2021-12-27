import ValueBox from "./value-box";
import classes from "./values-container.module.css";

export default function ValuesContainer() {
  return (
    <div className={classes.container}>
      <h3>Our Values</h3>
      <section className={classes.valueBoxes}>
        <ValueBox
          icon={"/star.svg"}
          title={"World Class Quality"}
          description={
            "We value creating high quality, 100% free college courses."
          }
        />
        <ValueBox
          icon={"/book.svg"}
          title={"Diverse Offerings"}
          description={
            "We want to offer a number of different offerings to members from free educational videos to bounties."
          }
        />
        <ValueBox
          icon={"/cap.svg"}
          title={"Community"}
          description={
            "No one should have to learn alone. That’s why we strive to build a strong, supportive community of learners."
          }
        />
      </section>
    </div>
  );
}
