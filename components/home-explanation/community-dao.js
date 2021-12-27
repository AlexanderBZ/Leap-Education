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
          Build a
          <span className={classes.highlight}> Community first DAO.</span>
        </h3>
        <p>We want to build a Strong community with:</p>
        <ul>
          <li>Virtual and IRL events</li>
          <li>Expert led workshops</li>
          <li>Governance rights and perks for backers</li>
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
