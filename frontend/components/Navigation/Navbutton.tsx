import React from "react";
import Link from "next/link";

type Props = {
  href?: string;
  children?: React.ReactNode;
};
const NavButton = ({ children, href = "/" }: Props) => {
  return (
    <>
      <div>
        <a
          href={href}
          className="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
        >
          {children}
        </a>
      </div>
    </>
  );
};

export default NavButton;
