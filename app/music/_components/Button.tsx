"use client";

import React, { ButtonHTMLAttributes } from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="border-3 border-wit w-48 h-8 text-wit font-extrabold hover:bg-wit hover:text-cheer"
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };
