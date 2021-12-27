import classes from "./lesson-row.module.css";

export default function LessonRow({ index, lesson }) {
  return (
    <div className={classes.container}>
      <section className={classes.circle}>
        <p className={classes.inner}>{index + 1}</p>
      </section>
      <section className={classes.text}>
        <h5>{lesson.title}</h5>
        <p>{lesson.description}</p>
      </section>
      <section className={classes.timeBackground}>
        <p className={classes.length}>{lesson.length}</p>
      </section>
    </div>
  );
}
