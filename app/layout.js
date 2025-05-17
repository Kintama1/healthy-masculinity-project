import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Figures of Healthy Black Masculinity",
  description: "Celebrating and highlighting positive representations of Black masculinity through art, culture, and history",
  keywords: "Black masculinity, positive representation, Black artists, Black culture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/iconhe.svg" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="site-header">
            <div className="container">
              <h1 className="site-title">Figures of Healthy Black Masculinity</h1>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="site-footer">
            <div className="container">
              <p>&copy; {new Date().getFullYear()} Figures of Healthy Black Masculinity</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}