import Link from "next/link";

export const genres = [
  {
    number: "01",
    name: "Bawdy funk",
    slug: "bawdy-funk",
    src: "/music/bawdy-funk.mp3",
  },
  { number: "02", name: "Bouncy swing", slug: "bouncy-swing" },
  { number: "03", name: "Buoyant raggae", slug: "buoyant-raggae" },
  { number: "04", name: "Defiant jazz", slug: "defiant-jazz" },
  { number: "05", name: "Effusive ska", slug: "effusive-ska" },
  { number: "06", name: "Exalted choral", slug: "exalted-choral" },
  { number: "07", name: "Exciting rap", slug: "exciting-rap" },
  {
    number: "08",
    name: "Hootin tootin country",
    slug: "hootin-tootin-country",
  },
  { number: "09", name: "Lofty orchestra", slug: "lofty-orchestra" },
  { number: "10", name: "Maximized rhythms", slug: "maximized-rhythms" },
  { number: "11", name: "Playful punk", slug: "playful-punk" },
  { number: "12", name: "Reckless disco", slug: "reckless-disco" },
  { number: "13", name: "Spooky ambient", slug: "spooky-ambient" },
  { number: "14", name: "Tearful emo", slug: "tearful-emo" },
  { number: "15", name: "Thoughtful grunge", slug: "thoughtful-grunge" },
  { number: "16", name: "Wholesome big band", slug: "wholesome-big-band" },
  { number: "17", name: "Wistful pipes", slug: "wistful-pipes" },
];

export type Genre = (typeof genres)[number];

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
