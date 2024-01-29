import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/Navbar";
import { ThemeProvider } from "@/Providers/ThemeProviders";
import Footer from "@/layouts/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  // preload: true,
});
export const metadata: Metadata = {
  title: "TechBazr",
  description: "We are your everyday tech solutions provider. ",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` scroll-mt-28 scroll-smooth dark:bg-black dark:text-gray-400 ${poppins.variable}  font-poppins `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
