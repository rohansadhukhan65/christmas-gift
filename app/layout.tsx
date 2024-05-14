import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christmas Gift",
  description: "Fully Responsive Website by Rohan Sadhukhan",
  openGraph:{
    title:'Christmas Gift',
    description: "Fully Responsive Website by Rohan Sadhukhan",
    images:['/metaimage.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
