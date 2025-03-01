"use client";

import { Genre } from "@/data/music";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import the router
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { ThumbsDown } from "lucide-react";

export default function RecordPlayer({
  genre,
  progress,
  setProgress,
}: {
  genre: Genre;
  progress: number;
  setProgress: (progress: number) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // New state to manage the dialog visibility
  const router = useRouter(); // Use the router for redirect

  // Initialize the audio element when the component mounts
  useEffect(() => {
    if (genre.src && !audioRef.current) {
      audioRef.current = new Audio(genre.src);
    }

    // Clean up the audio element on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [genre.src]);

  // Update progress based on currentTime and duration
  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const updateProgress = () => {
        if (audio.duration > 0) {
          const percent = (audio.currentTime / audio.duration) * 100;
          setProgress(percent);
        }
      };

      audio.addEventListener("timeupdate", updateProgress);

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, [setProgress]);

  const playSong = () => {
    if (audioRef.current) {
      setPlaying(true);
      audioRef.current.play();
    }
  };

  const toggleRecordPlayer = () => {
    if (!playing) {
      // Play the song
      playSong();
    } else {
      // Turn off the record player, open the dialog, and wait 2 seconds to redirect
      setPlaying(false);
      audioRef.current?.pause();
      setIsDialogOpen(true);

      setTimeout(() => {
        router.push("/music");
      }, 2000); //
    }
  };

  useEffect(() => {
    if (progress >= 100) {
      setPlaying(false);
    }
  }, [progress]);

  return (
    <div className="relative w-80 h-96 bg-wit rounded-lg shadow-xl lg:p-4">
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
          <div className="absolute inset-4 rounded-full border-2 border-vision opacity-30" />
          <div className="absolute inset-8 rounded-full border-2 border-vision opacity-30" />
          <div className="absolute inset-12 rounded-full border-2 border-vision opacity-30" />
          <div className="absolute inset-16 rounded-full border-2 border-vision opacity-30" />

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
        <div className="absolute top-0 right-0 h-4 w-4 bg-gray-400 rounded-full" />
        <div className="absolute top-0 left-3 h-4 w-8 bg-gray-600 rounded-lg" />
        <div className="absolute top-1 left-0 w-2 h-2 bg-gray-300 rounded-full" />
      </div>

      {/* Vintage toggle switch */}
      <div className="absolute bottom-8 right-6 flex flex-col items-center">
        {/* Labels */}
        {/* Switch housing */}
        <div className="w-14 h-8 bg-gray-800 rounded-md flex items-center justify-center shadow-md border border-gray-700 relative">
          {/* Toggle lever */}
          <button
            onClick={() => {
              toggleRecordPlayer();
            }}
            className="group w-6 h-10 absolute cursor-pointer focus:outline-none"
            aria-label="Turn off record player"
          >
            <div
              className={`w-6 h-10 relative transition-all duration-300 ${
                playing ? "translate-x-3" : "-translate-x-3"
              } group-hover:scale-105`}
            >
              {/* Toggle base */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-6 bg-gray-400 rounded-sm border border-gray-600"></div>

              {/* Toggle handle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-4 bg-gray-300 rounded-sm border border-gray-500 shadow-sm group-hover:shadow-lg"></div>

              {/* Toggle grip lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-2 flex flex-col justify-between">
                <div className="w-full h-px bg-gray-600"></div>
                <div className="w-full h-px bg-gray-600"></div>
                <div className="w-full h-px bg-gray-600"></div>
              </div>
            </div>
          </button>

          {/* Switch plate */}
          <div className="absolute inset-0 rounded-md border-2 border-gray-700 pointer-events-none"></div>

          {/* Screws */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Dialog triggered when turning off */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger />
          <DialogContent>
            <ThumbsDown size={150} />
            <DialogTitle>
              The music experience is officially cancelled.
            </DialogTitle>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
