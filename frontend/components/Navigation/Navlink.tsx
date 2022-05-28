import React from "react";
import Link from "next/link";

type Props = {
  href?: string;
  children?: React.ReactNode;
};
const NavlinkComponent = ({ children, href = "/" }: Props) => {
  return (
    <>
      <Link
        href={href}
        className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <span className="font-bold">{children}</span>
      </Link>
    </>
  );
};

export default NavlinkComponent;
