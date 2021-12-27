import Image from "next/image";
import classes from "./course.module.css";

export default function CourseHeader({ cover, title, description, lessons }) {
  return (
    <main>
      <div className={classes.coursePreview}>
        <section className={classes.cover}>
          <img src={cover} />
          <div className={classes.playBtn}>
            <Image src={"/play.svg"} width={45} height={45} />
          </div>
        </section>
        <section className={classes.text}>
          <h2>{title}</h2>
          <h5>{`${lessons.length} sections - 3 hours of videos`}</h5>
          <p>{description}</p>
        </section>
      </div>
      <hr className={classes.divider} />
      <div className={classes.lessons}>
        <h5>{`${lessons.length} lessons`}</h5>
        <p>
          All techniques are explained step-by-step, in a beginner-friendly
          format so that you can easily follow in a cohesive way.
        </p>
      </div>
    </main>
  );
}
