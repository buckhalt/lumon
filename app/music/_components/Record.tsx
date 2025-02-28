import { Genre } from "../page";

const RecordText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`text-center font-[family-name:var(--font-michroma)] uppercase pt-2 flex flex-col ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};
export default function Record({ genre }: { genre: Genre }) {
  return (
    <div className="h-75 w-75 rounded-full bg-wit flex flex-col gap-6 items-center justify-center text-white">
      <RecordText text={genre.number} className="text-2xl" />
      <div className="h-20 w-20 rounded-full bg-cheer mb-4" />
      <RecordText text={genre.name} className="text-xs" />
    </div>
  );
}
