import { redirect } from "next/navigation";
import { genres } from "../page";
import Record from "../_components/Record";
import { Button } from "../_components/Button";

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
        <h1 className="text-6xl">MUSIC EXPERIENCE</h1>
        <h1 className="text-2xl font-medium uppercase">{genre.name}</h1>
      </div>
      <Record genre={genre} />
      <Button>BEGIN</Button>
    </div>
  );
}
