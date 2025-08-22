import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Next 15 App",
  description: "Demo multi-page app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="border-b">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex gap-4">
            <Link href="/" className="font-medium">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/shows">Shows</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mt-12 border-t py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} My Next 15 App
        </footer>
      </body>
    </html>
  );
}
