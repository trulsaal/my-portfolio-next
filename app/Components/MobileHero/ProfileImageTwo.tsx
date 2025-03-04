import Image from "next/image";
import { getProfileImage } from "@/sanity/sanity-util";
import { ReactNode } from "react";

const profileImage = await getProfileImage();
interface Props {
  profileImage: ReactNode;
}
export default async function ProfileImageTwo() {
  return (
    <div className="flex items-center md:hidden">
      {profileImage.map((profileImage: Props) => (
        <div
          key={profileImage._id}
          className="md:z-10 md:absolute md:overflow-x-clip md:overflow-y-clip object-cover md:overflow-hidden md:h-full md:-bottom-10 md:-right-10 bg-transparent mx-auto px-2"
        >
          <Image
            className="mx-auto"
            src={profileImage.image}
            width={250}
            height={250}
            alt={profileImage.alt}
          />
        </div>
      ))}
    </div>
  );
}
