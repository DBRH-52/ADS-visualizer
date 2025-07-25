import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { colors_dark_mode, fonts, spacing } from "../styles/design-system";
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>ADS Visualizer</title>
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children} {/*content from each page goes here*/}
        </ThemeProvider>
      </body>
    </html>
  );
}


