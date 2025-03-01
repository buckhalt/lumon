import CustomCursor from "@/components/Cusrsor";
import LogoHeader from "./_components/LogoHeader";

export default function MusicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="items-center justify-items-center min-h-screen flex flex-col gap-12 pb-12 font-semibold bg-cheer text-wit">
      <LogoHeader />
      <CustomCursor color="#0F172A" fill="#E7F2A0" />

      {children}
    </div>
  );
}
