import Navbar from "../components/Navbar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-950">
      <Navbar />
      {children}
    </div>
  );
}