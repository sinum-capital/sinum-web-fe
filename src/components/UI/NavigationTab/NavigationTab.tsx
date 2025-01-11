"use client";

import {ComponentPropsWithoutRef, FC} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
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

        <Link href={href}>
            <li
                className={`${styles.link} ${pathname === href ? styles.activeLink : ""}`}
                {...rest}
            >
                {children}
            </li>
        </Link>
    );
};

export default NavigationTab;
