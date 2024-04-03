import Link from "next/link";


export default function Button(props: {text: string, href: string}) {
    return (
        <Link className="relative text-text-0 hover:text-sky-4 hover:bg-slate-1 rounded-lg py-2 px-3 duration-300" href={props.href}>
            {props.text}
        </Link>
    );
}
