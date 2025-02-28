import LogoHeader from "./_components/LogoHeader";

const genres = [
  "Bawdy funk",
  "Bouncy swing",
  "Buoyant raggae",
  "Defiant jazz",
  "Effusive ska",
  "Exalted choral",
  "Exciting rap",
  "Hootin tootin country",
  "Lofty orchestra",
  "Maximized rhythms",
  "Playful punk",
  "Reckless disco",
  "Spooky ambient",
  "Tearful emo",
  "Thoughtful grunge",
  "Wholesome big band",
  "Wistful pipes",
];

export default function Music() {
  return (
    <div>
      <div className="items-center justify-items-center min-h-screen flex flex-col gap-12 font-semibold bg-cheer text-wit">
        <LogoHeader />
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-6xl">MUSIC EXPERIENCE</h1>
          <h1 className="text-2xl font-medium">(CHOOSE ONE)</h1>
        </div>
        <div className="flex flex-col gap-2 items-center uppercase font-bold">
          {genres.map((genre) => (
            <p key={genre} className="uppercase hover:underline decoration-3">
              {genre}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
