import { useState } from "react";
import Link from "next/link";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import classes from "./menu.module.css";

export default function Menu(props) {
  // Set useState var for dropdown
  const [showDropdown, setShowDropdown] = useState();

  // Get token when page loads
  if (typeof window !== "undefined") {
    var token = localStorage.getItem("x-amz-security-token");
  }

  return (
    <div className={classes.navigation}>
      <div className={classes.menuItems}>
        <nav onClick={() => setShowDropdown(!showDropdown)}>Courses</nav>
        <ArrowDropDownIcon className={classes.icon} width="20px" />
        {showDropdown && props.children}
      </div>
      <div>
        <Link href={`/about`}>
          <a className={classes.menuItems}>
            <nav>About</nav>
            <ArrowRightIcon className={classes.icon} width="20px" />
          </a>
        </Link>
      </div>
      {/* <div>
        {!token && (
          <Link href="/login">
            <a className={classes.menuItems}>
              <nav>Login</nav>
              <ArrowRightIcon className={classes.icon} width="20px" />
            </a>
          </Link>
        )}
      </div>
      <div>
        {!token && (
          <Link href="/signup">
            <a className={classes.menuItems}>
              <nav>Sign Up</nav>
              <ArrowRightIcon className={classes.icon} width="20px" />
            </a>
          </Link>
        )}
      </div> */}
      <div>
        {token && (
          <Link href={`/profile`}>
            <a className={classes.menuItems}>
              <nav>Profile</nav>
              <ArrowRightIcon className={classes.icon} width="20px" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
