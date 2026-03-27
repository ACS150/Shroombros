import "./globals.css";

export const metadata = {
  title: "Shroombro Next",
  description: "Next.js wrapper around legacy HTML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

