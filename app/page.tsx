import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen flex flex-col p-48 gap-12 font-[family-name:var(--font-michroma)]">
      <Image
        src="/lumon-outline-light.svg"
        alt="Lumon Industries"
        width={500}
        height={500}
      />
      <Link href="/music" className="text-2xl hover:underline decoration-3">
        Music Experience
      </Link>
    </div>
  );
}
