export default function Navbar() {
    return (
        <nav>
            <div className="flex static pt-3 pb-3 items-center justify-between text-slate-700 bg-opacity-50 bg-white">
                <div className="flex static pl-3">
                    <a href="/page" className="bg-slate-300 rounded p-1">
                        <img src="home.png" alt="Home" className="w-6 h-6"></img>
                    </a>
                </div>

                <div className="items-center font-semibold">
                    <ul className="flex items-center gap-x-8 pr-3">
                        <li>
                            <a href="/projects" className="bg-slate-300 bg-opacity-50 rounded p-1 hover:text-sky-500">
                                Projects
                            </a>
                        </li>
                            <a href="#" className="bg-slate-300 bg-opacity-50 rounded p-1 hover:text-sky-500">
                                文
                            </a>
                        <li>
                            <a href="#" className="bg-slate-300 bg-opacity-50 rounded p-1 hover:text-sky-500">
                                Dark Mode
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
