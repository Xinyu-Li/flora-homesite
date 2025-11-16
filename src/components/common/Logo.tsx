'use client';

import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.scss";
import floraLogo from "@/../public/logo1.png";

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo} aria-label="Navigate to FLoRA home">
      <Image src={floraLogo} alt="FLoRA logo" width={96} height={64} priority />
      <span>FLoRA ENGINE</span>
    </Link>
  );
};

export default Logo;
