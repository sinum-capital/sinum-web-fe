"use client";

import { ComponentPropsWithoutRef, FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";

interface NavigationTabsProps extends ComponentPropsWithoutRef<"li"> {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
}

const NavigationTab: FC<NavigationTabsProps> = ({
  href,
  children,
  ...rest
}) => {
  const pathname = usePathname();
  return (
    <li
      className={`${styles.link} ${pathname === href ? styles.activeLink : ""}`}
      {...rest}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavigationTab;
