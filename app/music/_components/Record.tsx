import { Genre } from "@/data/music";
import { motion } from "motion/react";

const RecordText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`text-center font-[family-name:var(--font-michroma)] uppercase ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default function Record({
  genre,
  spinning = false,
}: {
  genre: Genre;
  spinning?: boolean;
}) {
  const recordVariants = {
    spinning: {
      rotate: 360,
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
    stopped: {
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="relative h-75 w-75 rounded-full bg-wit flex items-center justify-center"
      animate={spinning ? "spinning" : "stopped"}
      variants={recordVariants}
    >
      <div className="absolute inset-0 flex flex-col items-center">
        <RecordText text={genre.number} className="text-2xl text-cheer pt-12" />
      </div>

      <div className="absolute h-20 w-20 rounded-full bg-cheer" />

      <div className="absolute inset-0 flex flex-col items-center justify-end">
        <RecordText
          text={genre.name}
          className="text-xs text-cheer w-36 mb-12"
        />
      </div>
    </motion.div>
  );
}
