import Image from "next/image";
import { getProfileImage } from "@/sanity/sanity-util";

interface ProfileImageTwo {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  alt?: string;
}

export default async function ProfileImageTwo() {
  const profileImage: ProfileImageTwo = await getProfileImage();
  return (
    <div className="flex items-center md:hidden">
      <div
        key={profileImage._id}
        className="md:z-10 md:absolute md:overflow-x-clip md:overflow-y-clip object-cover md:overflow-hidden md:h-full md:-bottom-10 md:-right-10 bg-transparent mx-auto px-2"
      >
        <Image
          className="mx-auto"
          src={profileImage.image}
          width={250}
          height={250}
          alt={profileImage.alt || "Profile Image"}
        />
      </div>
    </div>
  );
}
