import Image from "next/image";
import Link from "next/link";

const Line = () => {
  return <div className="bg-wit h-1 w-screen" />;
};

const Lines = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </div>
  );
};

export default function LogoHeader() {
  return (
    <div className="pt-6 pb-4 flex flex-col items-center gap-1">
      <Lines />
      <Link href="/" className="flex flex-col items-center">
        <Image
          src="/lumon-fill-dark.svg"
          alt="Lumon Industries"
          width={200}
          height={200}
          className="absolute z-10 top-4 p-2 bg-cheer rounded-full"
        />
      </Link>
    </div>
  );
}
