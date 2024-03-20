import Link from "next/link";


export default function Button(props: {text: string, href: string}) {
    return (
        <Link className="relative text-text0 hover:text-sky4 hover:bg-slate1 rounded-lg py-2 px-3 duration-300" href={props.href}>
            {props.text}
        </Link>
    );
}
