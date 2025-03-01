"use client";

import { Progress } from "../../../components/ui/Progress";
import Record from "./RecordPlayer";
import type { Genre } from "@/data/music";
import { ConfettiButton } from "./Confetti";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MusicExperience({ genre }: { genre: Genre }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Record genre={genre} progress={progress} setProgress={setProgress} />
      <div className="flex flex-col gap-2 items-center">
        <Progress value={Math.floor(progress)} />
        {progress === 100 && (
          <ConfettiButton
            options={{
              colors: ["#fca1a9", "#7dcbdc", "#b3d6c3", "#ecac70"],
              spread: 65,
              particleCount: 100,
            }}
            onClick={() => {
              router.push("/music");
            }}
          >
            FINISH
          </ConfettiButton>
        )}
      </div>
    </>
  );
}
