import Image from "next/image";
import profileImage from "@/public/profilbilde.png";

export default async function ProfileImageTwo() {
  
  return (
    <div className="flex items-center md:hidden">
      <div
        
        className="md:z-10 md:absolute md:overflow-x-clip md:overflow-y-clip object-cover md:overflow-hidden md:h-full md:-bottom-10 md:-right-10 bg-transparent mx-auto px-2"
      >
        <Image
          className="mx-auto"
          src={profileImage}
          width={250}
          height={250}
          alt= "Profile Image"
        />
      </div>
    </div>
  );
}
