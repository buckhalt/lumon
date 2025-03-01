import { redirect } from "next/navigation";
import { genres } from "@/data/music";
import MusicExperience from "../_components/MusicExperience";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: {
    genre: string;
  };
}) {
  const genreSlug = await params.genre;

  const genre = genres.find((genre) => genre.slug === genreSlug);

  if (!genre) redirect("/music");
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col gap-4 items-center">
        <Link href="/music">
          <h1 className="text-6xl">MUSIC EXPERIENCE</h1>
        </Link>
        <h1 className="text-2xl font-medium uppercase">{genre.name}</h1>
      </div>

      <MusicExperience genre={genre} />
    </div>
  );
}
