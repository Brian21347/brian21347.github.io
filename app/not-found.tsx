"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="text-center">
      <h2 className="text-xl pt-10">
        Sorry, but the requested page was not found
      </h2>
      <button
        onClick={() =>
          window.history.length > 1 &&
          document.referrer.indexOf(window.location.host) !== -1
            ? router.back()
            : router.replace("/")
        }
        className="text-text-0 hover:text-sky-4 hover:bg-slate-2 px-3 py-2 rounded-lg"
      >
        Go back a page
      </button>
    </div>
  );
}
