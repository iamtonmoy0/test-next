"use client";
import classNames from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, exact, activeClassName, ...props }) => {
  const path = usePathname();
  const pathActive = exact ? path === href : path.startsWith(href);
  const classes = classNames(props.className, pathActive && activeClassName);
  if (classes) {
    props.className = classes;
  }
  return (
    <div>
      <Link href={href} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
