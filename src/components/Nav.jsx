import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

export const Navbar = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav class="relative flex flex-wrap items-center justify-between py-3 bg-white container mx-auto">
                <div class="container mx-auto flex flex-wrap items-center justify-between">

                    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            class="text-sm leading-relaxed inline-block mr-4 p-4 whitespace-nowrap uppercase underline bg-black"
                            href="/"
                        >
                            <img src="logo.svg" alt="logo" class="h-12 w-24 p-2 -ml-3" />
                        </a>
                        <button
                            class="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                            <li><Link activeClassName="underline" href="/" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Home</Link></li>
                            <li><Link activeClassName="underline" href="/manual" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline hidden" onClick={() => setNavbarOpen(false)}>Hacker Manual</Link></li>
                            <li><Link activeClassName="underline" href="/schedule" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline hidden" onClick={() => setNavbarOpen(false)}>Schedule</Link></li>
                            <li><Link activeClassName="underline" href="/venues" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Venues</Link></li>
                            <li><Link activeClassName="underline" href="/contributors" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Contributors</Link></li>
                            <li><Link activeClassName="underline" href="https://join.ethbrno.cz" rel="noopener noreferrer" target="_blank" class="p-5 flex items-center bg-black text-white  uppercase font-bold leading-snug hover:opacity-75 hover:underline">Join</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};