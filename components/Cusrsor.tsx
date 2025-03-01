"use client";
import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";

const CustomCursor = ({ color }: { color: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";

    // Apply cursor: none to all elements that might have custom cursors
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);

    // Track mouse movement
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    // Cleanup
    return () => {
      document.body.style.cursor = "auto";
      document.head.removeChild(styleElement);
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // So it doesn't interfere with clicking
        zIndex: 9999,
      }}
    >
      <MousePointer2 size={32} strokeWidth={3} color={color} />
    </div>
  );
};

export default CustomCursor;
