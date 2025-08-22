import Link from "next/link";

const shows = [
  { slug: "hms-pinafore", title: "H.M.S. Pinafore", date: "2025-10-03" },
  { slug: "mikado", title: "The Mikado", date: "2025-12-12" },
  { slug: "gondoliers", title: "The Gondoliers", date: "2026-02-20" },
];

export const metadata = { title: "Shows" };

export default function ShowsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Upcoming Shows</h1>
      <ul className="grid gap-3">
        {shows.map((s) => (
          <li key={s.slug} className="border rounded p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-gray-600">{new Date(s.date).toLocaleDateString()}</div>
            </div>
            <Link href={`/shows/${s.slug}`} className="underline">Details</Link>
          </li>
        ))}
      </ul>
    </>
  );
}