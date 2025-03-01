import { redirect } from "next/navigation";
import { genres } from "@/data/music";
import MusicExperience from "../_components/MusicExperience";
import Link from "next/link";

export default async function Page(props: {
  params: Promise<{
    genre: string;
  }>;
}) {
  const params = await props.params;
  const genreSlug = await params.genre;

  const genre = genres.find((genre) => genre.slug === genreSlug);

  if (!genre) redirect("/music");
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-12">
      <div className="flex flex-col gap-1 lg:gap-4 items-center uppercase">
        <Link href="/music">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">MUSIC EXPERIENCE</h1>
        </Link>
        <h1 className="text-lg md:text-xl lg:text-xl font-medium pb-2 md:pb-4 lg:pb-4">
          {genre.name}
        </h1>
      </div>

      <MusicExperience genre={genre} />
    </div>
  );
}
