"use client";

import { Button } from "./Button";
import { Progress } from "./Progress";
import { useState, useRef, useEffect } from "react";
import Record from "./Record";
import type { Genre } from "@/data/music";

export default function Player({ genre }: { genre: Genre }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
  }, []);

  const playSong = () => {
    if (audioRef.current) {
      setPlaying(true);
      audioRef.current.play();
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      setPlaying(false);
      audioRef.current.pause();
    }
  };

  return (
    <>
      <Record genre={genre} spinning={playing} />
      <div className="flex flex-col gap-2 items-center">
        {playing ? (
          <Button
            onClick={() => {
              pauseSong();
            }}
          >
            PAUSE
          </Button>
        ) : (
          <Button
            onClick={() => {
              playSong();
            }}
          >
            PLAY
          </Button>
        )}

        <Progress value={Math.floor(progress)} />
      </div>
    </>
  );
}
