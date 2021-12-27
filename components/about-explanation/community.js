import Image from "next/image";
import Link from "next/link";
import classes from "./community.module.css";

export default function Community() {
  return (
    <div className={classes.container}>
      <section className={classes.image}>
        <Image src={"/images/welcome/space-2.png"} width={585} height={365} />
      </section>
      <section>
        <h3>
          We’re a community of
          <span className={classes.highlight}> learners.</span>
        </h3>
        <p>
          We are a community of students, engineers, scientists and more, all
          passionate about lifelong learning. Join us now, it’s free.
        </p>
        <Link href={"/courses"}>
          <a>
            <div className={classes.visit}>
              <h5>Join Community</h5>
              <Image src={"/diagonal-arrow.svg"} width={37} height={37} />
            </div>
            <hr />
          </a>
        </Link>
      </section>
    </div>
  );
}
