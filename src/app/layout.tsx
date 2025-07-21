import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { colors_dark_mode, fonts, spacing } from "../styles/design-system";
import { Inter } from 'next/font/google';

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
      <body
        style={{
          '--frame-background': colors_dark_mode.frame,
          '--frame-border': colors_dark_mode.border,
          '--navbar-background': colors_dark_mode.navbar,
          '--navbar-color': colors_dark_mode.foreground,
          '--navbar-font': fonts.primary,
          '--navbar-gap': spacing.lg,
          '--navbar-padding': `${spacing.md} ${spacing.lg}`,
        } as React.CSSProperties}
      >
        <Navbar />
        {children} {/*content from each page goes here*/}
      </body>
    </html>
  );
}
