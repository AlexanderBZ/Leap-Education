import Link from "next/link";
import Image from "next/image";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <hr className={classes.divider} />
      <div className={classes.navigation}>
        <section className={classes.links}>
          <div className={classes.pages}>
            <h3>Pages</h3>
            <Link href="/home">
              <p className={classes.footerItem}>Home</p>
            </Link>
            <Link href="/about">
              <p className={classes.footerItem}>About</p>
            </Link>
            <Link href="/learn">
              <p className={classes.footerItem}>Learn</p>
            </Link>
          </div>
          <div className={classes.socials}>
            <h3>Socials</h3>
            <Link href={"https://www.twitter.com/BeatlyMusic/"} passHref>
              <div className={classes.socialLink}>
                <Image
                  src={"/social-media-icons/twitter.svg"}
                  alt={"Twitter icon"}
                  width={20}
                  height={20}
                />
                <p>Twitter</p>
              </div>
            </Link>
            <Link href={"https://www.instagram.com/beatly.music/"} passHref>
              <div className={classes.socialLink}>
                <Image
                  src={"/social-media-icons/discord.svg"}
                  alt={"Discord icon"}
                  width={20}
                  height={20}
                />
                <p>Discord</p>
              </div>
            </Link>
          </div>
        </section>
        <section className={classes.missionStatement}>
          <p>
            Our mission is to provide a free, world-class education to anyone,
            anywhere.
          </p>
        </section>
      </div>
      <hr className={classes.dividerTwo} />
      <section className={classes.copyright}>
        <Image
          src={"/images/logo/logo.png"}
          alt={"Logo"}
          width={130}
          height={37}
        />
        <h3>Copyright © 2022</h3>
      </section>
    </footer>
  );
}
