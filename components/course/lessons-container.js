import LessonRow from "./lesson-row";
import classes from "./lessons-container.module.css";

export default function LessonsContainer({ lessons }) {
  const half = Math.ceil(lessons.length / 2);
  const firstHalf = lessons.slice(0, half);
  const secondHalf = lessons.slice(-half);

  return (
    <div className={classes.container}>
      <section>
        {firstHalf.map((lesson, index) => {
          return <LessonRow index={index} lesson={lesson} key={lesson.id} />;
        })}
      </section>
      <section>
        {secondHalf.map((lesson, index) => {
          return (
            <LessonRow index={index + half} lesson={lesson} key={lesson.id} />
          );
        })}
      </section>
    </div>
  );
}
