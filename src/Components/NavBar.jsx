import Link from "next/link";

export default function NavBar () {

    return  (
        <div className="nav">
            <header aria-label="Site Header" className="shadow-sm">
            <div
                className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
            >
                <div className="flex w-0 flex-1 lg:hidden">
                <button className="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
                    <span className="sr-only">Account</span>
                    <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                    ></path>
                    </svg>
                </button>
                </div>

                <div className="flex items-center gap-4">
                <a href="#">
                    <span className="sr-only">Logo</span>
                    <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
                </a>

               
                </div>

                <div className="flex w-0 flex-1 justify-end lg:hidden">
                <button className="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
                    <span className="sr-only">Menu</span>
                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        fill-rule="evenodd"
                    ></path>
                    </svg>
                </button>
                </div>

                <nav
                aria-label="Site Nav"
                className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
                >
                <Link  className="text-gray-900" href="">About</Link>
                <Link className="text-gray-900" href="">Blog</Link>
                <Link className="text-gray-900" href="">Projects</Link>
                <Link className="text-gray-900" href="">Contact</Link>
                </nav>

                
            </div>

            <div className="border-t border-gray-100 lg:hidden">
                <nav
                className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
                >
                <Link  className="text-gray-900" href="">About</Link>
                <Link className="text-gray-900" href="">Blog</Link>
                <Link className="text-gray-900" href="">Projects</Link>
                <Link className="text-gray-900" href="">Contact</Link>
                </nav>
            </div>
            </header>
        </div>
    )
}