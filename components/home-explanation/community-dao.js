import Image from "next/image";
import Link from "next/link";
import classes from "./community-dao.module.css";

export default function CommunityDAO() {
  return (
    <div className={classes.container}>
      <section className={classes.image}>
        <Image src={"/images/welcome/space-2.png"} width={585} height={365} />
      </section>
      <section>
        <h3>
          Learn with a
          <span className={classes.highlight}> Community of learners.</span>
        </h3>
        <p>We want to build a Strong community with:</p>
        <ul>
          <li>Virtual and IRL events</li>
          <li>Expert led workshops</li>
          <li>A strong alumni of students</li>
        </ul>
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
