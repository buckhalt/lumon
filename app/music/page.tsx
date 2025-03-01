import Link from "next/link";
import { genres } from "@/data/music";

export default function Music() {
  return (
    <div className="flex flex-col gap-2 items-center uppercase font-bold">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl">MUSIC EXPERIENCE</h1>
        <h1 className="text-2xl font-medium">(CHOOSE ONE)</h1>
      </div>
      {genres.map((genre) => (
        <Link
          href={`/music/${genre.slug}`}
          key={genre.slug}
          className="uppercase hover:underline decoration-3"
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}
