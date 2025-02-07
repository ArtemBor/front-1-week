import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Poppins } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  style: ['italic', 'normal']
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
