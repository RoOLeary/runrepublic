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
      href="/"
      className="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
    >
      {/* THIS USE FOR MY MULTI DEMO */}
      {/* IF YOU ARE MY CLIENT. PLESE DELETE THIS CODE AND YOU YOUR IMAGE PNG BY BELLOW CODE */}
      <Image alt="Logo" src="https://ronan-oleary.com/assets/ro-bw.d434f415.png" width="50" height="50" className="rounded-full" />
    </Link>
  );
};

export default Logo;
