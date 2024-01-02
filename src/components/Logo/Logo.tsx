import React from "react";
import Image from 'next/image';
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvg from "./LogoSvg";
import Link from "next/link";

export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const Logo = ({}:LogoProps): React.JSX.Element => {
  return (
    <Link
      href="/">
      <h2 className="font-black text-xl tracking-tighter">TECHSCENE</h2>
      {/* <Image alt="Logo" src="https://ronan-oleary.com/assets/ro-bw.d434f415.png" width="50" height="50" className="rounded-full" /> */}
    </Link>
  );
};

export default Logo;
