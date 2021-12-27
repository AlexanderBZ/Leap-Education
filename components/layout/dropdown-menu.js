import NavItem from "./nav-item";
import classes from "./dropdown-menu.module.css";

export default function DropdownMenu() {
  return (
    <div className={classes.dropdown}>
      <NavItem
        navItemName={"Calculus 1"}
        urlPath={"/courses/calculus-1"}
        className={classes.menuItem}
      />
      <NavItem
        navItemName={"Calculus 2"}
        urlPath={"/courses/calculus-2"}
        className={classes.menuItem}
      />
      <NavItem
        navItemName={"Calculus 3"}
        urlPath={"/courses/calculus-3"}
        className={classes.menuItem}
      />
      <NavItem
        navItemName={"MGT 100"}
        urlPath={"/courses/mgt-100"}
        className={classes.menuItem}
      />
    </div>
  );
}
