import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

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
      <body>
        <Navbar />
        {children} {/*content from each page goes here*/}
      </body>
    </html>
  );
}
