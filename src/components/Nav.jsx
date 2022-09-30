import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

export const Navbar = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white container mx-auto">
                <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            class="text-sm leading-relaxed inline-block mr-4 p-4 whitespace-nowrap uppercase bg-black text-white"
                            href="/"
                        >
                            <img src="logo.svg" alt="logo" class="h-12 w-24 p-2 -ml-3" />

                            <div class="text-xs " >November 11-13</div>
                            <div class="text-xs ">Brno</div>
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
                        id="navbar"
                    >
                        <ul class="flex flex-col lg:flex-row lg:flex-grow-0 lg:mt-0 list-none lg:ml-auto flex-grow mt-8">
                            <li><Link activeClassName="bg-black text-white" href="https://join.ethbrno.cz" target="_blank" class="p-5 flex items-center bg-gray-100  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline">Join</Link></li>
                            <li><Link activeClassName="bg-black text-white" href="/" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Home</Link></li>
                            <li><Link activeClassName="bg-black text-white" href="/manual" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Hacker Manual</Link></li>
                            <li><Link activeClassName="bg-black text-white" href="/schedule" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Schedule</Link></li>
                            <li><Link activeClassName="bg-black text-white" href="/venues" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Venues</Link></li>
                            <li><Link activeClassName="bg-black text-white" href="/contributors" class="p-5 flex items-center  uppercase font-bold leading-snug text-gray-900 hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Contributors</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};