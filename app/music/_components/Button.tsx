import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <button
      ref={ref}
      className="border-3 border-wit w-48 h-8 text-wit font-extrabold hover:bg-wit hover:text-cheer"
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };
