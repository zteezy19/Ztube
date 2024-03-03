import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          width={150}
          height={150}
          src="/Ztube-logo.svg"
          alt="Ztube Logo"
        />
      </Link>
    </nav>
  );
}
