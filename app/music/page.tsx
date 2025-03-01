import Link from "next/link";
import { genres } from "@/data/music";

export default function Music() {
  return (
    <div className="flex flex-col gap-2 items-center uppercase">
      <div className="flex flex-col gap-1 lg:gap-4 items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">MUSIC EXPERIENCE</h1>
        <h1 className="text-lg md:text-xl lg:text-xl font-medium pb-2 md:pb-4 lg:pb-4">
          (CHOOSE ONE)
        </h1>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 lg:gap-2 items-center">
        {genres.map((genre) => (
          <Link
            href={`/music/${genre.slug}`}
            key={genre.slug}
            className="text-base md:text-lg lg:text-base uppercase hover:underline decoration-3"
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
