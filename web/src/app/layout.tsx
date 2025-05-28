import NavBar from '../components/NavBar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <NavBar />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
