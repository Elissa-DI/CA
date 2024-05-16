import { FC } from "react";
import Image from "next/image";
import { logo } from "@utils/images";
import { useRouter } from "next/router";

const MiniLogo: FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <Image src={logo} alt={"Picture of the author"} width={50} priority />
    </div>
  );
};
export default MiniLogo;
