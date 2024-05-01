import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-xl pt-10">Sorry, but the requested page was not found</h2>
      <Link href="/" className="text-text-0 hover:text-sky-4">
        Return home
      </Link>
    </div>
  );
}
