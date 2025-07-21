import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { colors_dark_mode } from "../styles/design-system";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>ADS Visualizer</title>
      </head>
      <body
        style={{
          '--frame-background': colors_dark_mode.frame,
          '--frame-border': colors_dark_mode.border,
        } as React.CSSProperties}
      >
        <Navbar />
        {children} {/*content from each page goes here*/}
      </body>
    </html>
  );
}
