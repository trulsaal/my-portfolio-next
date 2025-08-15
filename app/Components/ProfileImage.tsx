import Image from "next/image";
import profilImage from "@/public/profilbilde.png";


export default function ProfileImageComponent() {

  return (
    <div>
      <Image
        className="overflow-hidden"
        src={profilImage}
        width={550}
        height={500}
        alt= "Profile Image"
      />
    </div>
  );
}

