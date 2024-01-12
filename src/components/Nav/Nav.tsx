import React, { FC } from "react";

export interface NavProps {
  containerClassName?: string;
  className?: string;
  children: React.ReactNode;
}

const Nav: FC<NavProps> = ({
  containerClassName = "",
  className = "",
  children,
}) => {
  return (
    <nav className={`Nav ${containerClassName}`} data-id="Nav">
      <ul className={`flex  ${className}`}>{children}</ul>
    </nav>
  );
};

export default Nav;
