import { FC } from 'react';
import Image from 'next/image';
import { logo } from '@utils/images';
import { useRouter } from 'next/router';

const Logo: FC<{ size?: number }> = ({ size }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Image
        src={logo}
        alt={'Picture of the author'}
        width={size ? size : 25}
        onClick={() => router.push('/')}
        className="cursor-pointer"
        priority
      />
      <div className="">
        <span className={`p-1 font-syne ${size?"text-xl":"text-xs"} font-bold rounded-lg bg-white text-black`}>
          Portfolio
        </span>
      </div>
    </div>
  );
};
export default Logo;
