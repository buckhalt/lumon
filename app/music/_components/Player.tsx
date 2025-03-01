"use client";

import { Button } from "./Button";
import { Progress } from "./Progress";
import { useState, useRef, useEffect } from "react";
import Record from "./Record";
import { Genre } from "../page";

export default function Player({ genre }: { genre: Genre }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Track progress as percentage
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
  }, [genre.src]); // This effect runs when the genre changes

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

      // Clean up event listener
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
      <Record genre={genre} />
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
          BEGIN
        </Button>
      )}

      <Progress value={progress} />
    </>
  );
}
