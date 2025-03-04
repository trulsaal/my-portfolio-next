import Image from "next/image";
import { getProfileImage } from "@/sanity/sanity-util";
import { ReactNode } from "react";

const profileImage = await getProfileImage();
interface Props {
  profileImage: ReactNode;
}
export default async function ProfileImage() {
  return (
    <div className="">
      {profileImage.map((profileImage: Props) => (
        <div key={profileImage._id} className="">
          <Image
            className="overflow-hidden"
            src={profileImage.image}
            width={550}
            height={500}
            alt={profileImage.alt}
          />
        </div>
      ))}
    </div>
  );
}
