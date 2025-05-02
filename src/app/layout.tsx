import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giovanni | Dashboard",
  description: "Treina Dev Treinamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-950">
        <div className="">{children}</div>
      </body>
    </html>
  );
}
