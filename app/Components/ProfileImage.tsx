import Image from "next/image";
import { getProfileImage } from "@/sanity/sanity-util";
import { ReactNode } from "react";

const profileImage = await getProfileImage();
interface Props {
  profileImage: ReactNode;
}
export default async function ProfileImage() {
  return (
    <div className="flex items-center md:relative">
      {profileImage.map((profileImage: Props) => (
        <div
          key={profileImage._id}
          className="md:z-10 md:absolute md:overflow-x-clip md:overflow-y-clip object-cover md:overflow-hidden md:h-full md:-bottom-10 md:-right-10 bg-transparent my-auto w-56 px-2"
        >
          <Image
            className="rounded-full"
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
