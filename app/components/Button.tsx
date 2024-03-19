import Link from "next/link";


export default function Button(props: {text: string, href: string}) {
    return (
        <Link className="relative bg-sky-400 text-slate-700 hover:text-slate-900 hover:bg-sky-500 rounded-lg py-2 px-3 duration-300 shadow-lg shadow-sky-200" href={props.href}>
            {props.text}
        </Link>
    );
}
