"use client";

import { Genre } from "@/data/music";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default function RecordPlayer({
  genre,
  playing,
}: {
  genre: Genre;
  playing?: boolean;
}) {
  return (
    <div className="relative w-80 h-96 bg-wit rounded-lg shadow-xl p-4">
      {/* Record player case */}
      <div className="absolute inset-0 rounded-lg bg-benevolence shadow-md overflow-hidden">
        {/* top part */}
        <div className="h-1/3 w-full bg-vision bg-opacity-30" />
        <Image
          src="/lumon-text-outline.svg"
          alt="Lumon logo"
          className="text-wit absolute bottom-4 left-1/2 transform -translate-x-1/2"
          width={100}
          height={100}
        />
      </div>

      {/* Turntable */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-probity rounded-full shadow-inner flex items-center justify-center">
        {/* Record */}
        <div
          className={`relative h-52 w-52 rounded-full bg-black flex items-center justify-center transition-transform duration-1000 ${
            playing ? "animate-spin" : ""
          }`}
        >
          {/* Record grooves */}
          <div className="absolute inset-4 rounded-full border-2 border-vision opacity-30"></div>
          <div className="absolute inset-8 rounded-full border-2 border-vision opacity-30"></div>
          <div className="absolute inset-12 rounded-full border-2 border-vision opacity-30"></div>
          <div className="absolute inset-16 rounded-full border-2 border-vision opacity-30"></div>

          {/* Center hole of the record */}
          <div className="absolute h-4 w-4 rounded-full bg-wit z-10" />

          {/* Record label */}
          <div
            className={cn(
              "absolute h-24 w-24 rounded-full flex items-center justify-center",
              {
                "bg-humility": genre.color === "bg-humility",
                "bg-nimbleness": genre.color === "bg-nimbleness",
                "bg-verve": genre.color === "bg-verve",
                "bg-wiles": genre.color === "bg-wiles",
              }
            )}
          >
            {/* Genre number */}
            <p className="text-center font-[family-name:var(--font-michroma)] uppercase text-wit absolute top-4">
              {genre.number}
            </p>
            {/* Genre shorthand */}
            <p className="text-center font-[family-name:var(--font-michroma)] uppercase text-xs text-black w-20 absolute bottom-4">
              {genre.shorthand}
            </p>
          </div>
        </div>
      </div>

      {/* Tonearm */}
      <div
        className={`absolute top-16 right-12 w-24 h-4 bg-gray-500 rounded-full origin-right transform ${
          playing ? "rotate-0" : "rotate-30"
        } transition-transform duration-700`}
      >
        <div className="absolute top-0 right-0 h-4 w-4 bg-gray-400 rounded-full"></div>
        <div className="absolute top-0 left-3 h-4 w-8 bg-gray-600 rounded-lg"></div>
        <div className="absolute top-1 left-0 w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
