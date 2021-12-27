import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./dropdown-menu";
import Menu from "./menu";
import SearchBar from "../search/search-bar";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import classes from "./header.module.css";

export default function Header() {
  // Create useState vars for menu and search
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  // Show and hide menu
  const showMenu = () => setMenu(!menu);
  // Show and hide search
  const showSearch = () => setSearch(!search);

  return (
    <header className={classes.navbar}>
      {!menu && (
        <MenuIcon
          className={classes.menuIcon}
          onClick={showMenu}
          width="25px"
        />
      )}
      {menu && (
        <CloseIcon
          className={classes.menuIcon}
          onClick={showMenu}
          width="25px"
        />
      )}
      <div className={classes.navlinksDesktop}>
        <Menu>
          <DropdownMenu />
        </Menu>
      </div>
      {menu && (
        <Menu className={classes.navlinksMobile}>
          <DropdownMenu />
        </Menu>
      )}
      <Link href={"/"}>
        <a className={classes.logo}>
          <div className={classes.logoIcon}>
            <Image
              src={"/images/logo/logo.png"}
              alt={"Beatly Music Icon"}
              width={166}
              height={45}
            />
          </div>
        </a>
      </Link>
      <div className={classes.searchDesktop}>
        <SearchBar />
      </div>
      {search && <SearchBar className={classes.searchActive} />}
      {!search && (
        <SearchIcon
          className={classes.searchIcon}
          onClick={showSearch}
          width="25px"
        />
      )}
      {search && (
        <CloseIcon
          className={classes.searchIcon}
          onClick={showSearch}
          width="25px"
        />
      )}
    </header>
  );
}
