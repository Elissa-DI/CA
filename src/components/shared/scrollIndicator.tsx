import React from 'react';
import scrollIndicator from "@public/images/scrollIndicator.svg"
import Image from 'next/image';

export const ScrollIndicator = () => {
  return (
    <div className="text-[#888888] relative flex flex-col items-center  p-40">
      <Image priority className='z-10 absolute -top-12' src={scrollIndicator} alt="scroll indicator" />
    </div>
  );
};
