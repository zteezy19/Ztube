"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";
import SignIn from "./signIn";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

//closure: State inside the function is maintained even after it has finished executing.
export default function NavBar() {
  //init user state
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  });

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image width={90} height={20} src="/Ztube-logo.svg" alt="Ztube Logo" />
      </Link>
      <SignIn user={user} />
    </nav>
  );
}
