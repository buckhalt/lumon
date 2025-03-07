import Link from "next/link";
import Image from "next/image";
import CustomCursor from "@/components/Cusrsor";

export default function Home() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-6 md:p-24 lg:p-48 gap-6 md:gap-12 font-[family-name:var(--font-michroma)]">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
        <Image
          src="/lumon-outline-light.svg"
          alt="Lumon Industries"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
      <Link
        href="/music"
        className="text-lg md:text-xl lg:text-2xl hover:underline decoration-3"
      >
        Music Experience
      </Link>
      <CustomCursor color="#FFFFFF" />
    </div>
  );
}
