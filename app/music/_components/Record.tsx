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
      className={`text-center font-[family-name:var(--font-michroma)] uppercase pt-2 flex flex-col ${className}`}
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
      className="h-75 w-75 rounded-full bg-wit flex flex-col gap-6 items-center justify-center text-cheer"
      animate={spinning ? "spinning" : "stopped"}
      variants={recordVariants}
    >
      <RecordText text={genre.number} className="text-2xl" />
      <div className="h-20 w-20 rounded-full bg-cheer mb-4" />
      <RecordText text={genre.name} className="text-xs w-36" />
    </motion.div>
  );
}
