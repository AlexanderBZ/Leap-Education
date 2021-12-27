import Link from "next/link";
import Image from "next/image";
import classes from "./home.module.css";

export default function HomeHeader() {
  return (
    <div className={classes.container}>
      <section className={classes.text}>
        <h1>
          Take The <span className={classes.highlight}>Leap</span>
        </h1>
        <p>We’re a learning DAO creating 100% free college courses</p>
        <Link href={"/courses"}>
          <button className={classes.learningButton}>Start Learning</button>
        </Link>
      </section>
      <section className={classes.logo}>
        <Image src={"/images/logo/logo-2.png"} width={273} height={190} />
      </section>
    </div>
  );
}
