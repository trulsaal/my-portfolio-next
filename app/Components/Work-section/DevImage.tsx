import Image from "next/image";
import React from "react";

interface Props {
  srcSet: string;
  className?: string;
}

export default function DevImage({ srcSet, className = "md:w-10" }: Props) {
  return (
    <div className="">
      <Image
        className={className}
        width={24}
        height={24}
        alt={"alt"}
        src={srcSet}
      ></Image>
    </div>
  );
}
