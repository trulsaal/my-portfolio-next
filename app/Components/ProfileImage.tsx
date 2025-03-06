import Image from "next/image";
import { getProfileImage } from "@/sanity/sanity-util";

interface ProfileImage {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  alt?: string;
}

export default async function ProfileImageComponent() {
  const profileImage: ProfileImage = await getProfileImage();

  return (
    <div>
      <Image
        className="overflow-hidden"
        src={profileImage.image}
        width={550}
        height={500}
        alt={profileImage.alt || "Profile Image"}
      />
    </div>
  );
}

{
  /* {profileImage.map((profileImage: Props) => (
        <div key={profileImage._id} className="">
          <Image
            className="overflow-hidden"
            src={profileImage.image}
            width={550}
            height={500}
            alt={profileImage.alt}
          />
        </div>
      ))} */
}
