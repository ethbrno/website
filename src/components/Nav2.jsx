import { useState } from 'preact/hooks'

export const Navbar = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 container mx-auto">
                <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-900"
                            href="/"
                        >
                            <img src="logo.svg" alt="logo" class="h-12 w-24 bg-gray-800 p-2" />
                        </a>
                        <button
                            class="text-gray-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            ☰
                        </button>
                    </div>
                    <div
                        class={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar"
                    >
                        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li><a href="/" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline">Home</a></li>
                            <li><a href="/manifesto" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline">Manifesto</a> </li>
                            <li><a href="/manual" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline">Hacker Manual</a></li>
                            <li><a href="/schedule" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline">Schedule</a></li>
                            <li><a href="/venues" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline">Venues</a></li>
                            <li><a href="/contributors" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline">Contributors</a></li>
                            <li><a href="/team" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline">Team</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}