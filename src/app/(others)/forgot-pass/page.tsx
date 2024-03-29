import React from 'react';

import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Heading2 from '@/components/Heading/Heading2';
import Input from '@/components/Input/Input';
import NcLink from '@/components/NcLink/NcLink';

const PageForgotPass = ({}) => {
  return (
    <>
      <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20">
        <Heading2>Forgot password</Heading2>
        <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
          Welcome to our blog magazine Community
        </span>
      </header>

      <div className="max-w-md mx-auto space-y-6">
        {/* FORM */}
        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Email address
            </span>
            <Input
              type="email"
              placeholder="example@runrepublic.com"
              className="mt-1"
            />
          </label>
          <ButtonPrimary type="submit">Continue</ButtonPrimary>
        </form>

        {/* ==== */}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Go back for {` `}
          <NcLink href="/login">Sign in</NcLink>
          {` / `}
          <NcLink href="/signup">Sign up</NcLink>
        </span>
      </div>
    </>
  );
};

export default PageForgotPass;
