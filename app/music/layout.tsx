import LogoHeader from "./_components/LogoHeader";

export default function MusicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="items-center justify-items-center min-h-screen flex flex-col gap-12 pb-12 font-semibold bg-cheer text-wit">
      <LogoHeader />

      {children}
    </div>
  );
}
