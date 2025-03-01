"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";
import { cn } from "@/utils/cn";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const percentage = value || 0;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-8 w-48 overflow-hidden bg-cheer border-3 border-wit",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-wit transition-all"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />

      <div className="absolute left-0 top-0 bottom-0 w-full flex items-center pl-2 font-extrabold">
        <div
          className="absolute left-0 text-cheer pl-2 flex items-center h-full"
          style={{
            clipPath: `inset(0 ${100 - percentage}% 0 0)`,
            width: "100%",
          }}
        >
          {percentage}%
        </div>

        <div
          className="absolute left-0 text-wit pl-2 flex items-center h-full"
          style={{
            clipPath: `inset(0 0 0 ${percentage}%)`,
            width: "100%",
          }}
        >
          {percentage}%
        </div>
      </div>
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
