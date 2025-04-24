import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MainHeaderBackground } from "./main-header-background";
import classes from "./main-header.module.css";
import { NavLink } from "./nav-link";

export function MainHeader() {

  return <>
    <MainHeaderBackground />

    <header className={classes.header}>

      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="a plate with food on it"></Image>
        NextLvl Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">
              Browse Meals
            </NavLink>
          </li>
          <li>
            <NavLink href="/community">
              Community
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>
  </>
}