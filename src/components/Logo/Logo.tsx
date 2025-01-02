import { Link } from 'next-view-transitions';
import React from 'react';

export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const Logo = ({}: LogoProps): React.JSX.Element => {
  return (
    <Link href="/">
      <h2 className="font-black text-2xl tracking-tighter">RUN REPUBLIC</h2>
      {/* <Image alt="Logo" src="https://ronan-oleary.com/assets/ro-bw.d434f415.png" width="50" height="50" className="rounded-full" /> */}
    </Link>
  );
};

export default Logo;
