import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h2 className="px-3 py-2 text-3xl  duration-300 font-bold text-slate-500 hover:text-slate-900 bg-sky-400 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-200">Home</h2>
    </Link>
  );
}
