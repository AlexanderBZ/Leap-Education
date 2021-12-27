import Link from "next/link";
import classes from "./nav-item.module.css";

export default function NavItem(props) {
  // get url for Link and Nav name from props
  const { urlPath, navItemName } = props;

  return (
    <Link href={urlPath}>
      <a>
        <li className={classes.navItem}>
          <nav>{navItemName}</nav>
        </li>
      </a>
    </Link>
  );
}
