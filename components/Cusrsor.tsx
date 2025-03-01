"use client";
import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";

const CustomCursor = ({ color, fill }: { color: string; fill?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      const userAgent =
        navigator.userAgent ||
        navigator.vendor ||
        (window as unknown as { opera?: string }).opera ||
        "";
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobiles|Opera Mini/i;

      setIsMobile(mobileRegex.test(userAgent) || window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Recheck on resize
    window.addEventListener("resize", checkMobile);

    // Only apply custom cursor if not on mobile
    if (!isMobile) {
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
        if (styleElement.parentNode) {
          document.head.removeChild(styleElement);
        }
        window.removeEventListener("mousemove", updateCursorPosition);
        window.removeEventListener("resize", checkMobile);
      };
    } else {
      // Just cleanup event listener on mobile
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, [isMobile]);

  // Don't render anything on mobile
  if (isMobile) return null;

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
      <MousePointer2 size={32} strokeWidth={3} color={color} fill={fill} />
    </div>
  );
};

export default CustomCursor;
