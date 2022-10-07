import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

export const Navbar = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav class="flex flex-wrap items-center justify-between px-4 bg-white mx-auto sticky top-0 z-50">
                <div class="container mx-auto flex flex-wrap items-center justify-between">

                    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            class="text-sm leading-relaxed inline-block mr-4 p-4 whitespace-nowrap uppercase underline"
                            href="/"
                        >
                            <img src="logo_black.svg" alt="logo" class="w-[145px] h-[54px] p-2 -ml-3" />
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
                        <ul class="flex flex-col lg:flex-row lg:flex-grow-0 lg:mt-0 list-none lg:ml-auto text-base flex-grow my-8 lg:my-0">
                            <li><Link activeClassName="underline" href="/" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Home</Link></li>
                            <li><Link activeClassName="underline" href="/manual" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline hidden" onClick={() => setNavbarOpen(false)}>Hacker Manual</Link></li>
                            <li><Link activeClassName="underline" href="/schedule" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline hidden" onClick={() => setNavbarOpen(false)}>Schedule</Link></li>
                            <li><Link activeClassName="underline" href="/venues" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Venues</Link></li>
                            <li><Link activeClassName="underline" href="/contributors" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline" onClick={() => setNavbarOpen(false)}>Contributors</Link></li>
                            <li><a href="https://matrix.to/#/#ethbrno:gwei.cz" rel="noopener noreferrer" class="p-5 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75 hover:underline">Chat</a></li>
                            <li><a href="https://join.ethbrno.cz" rel="noopener noreferrer" target="_blank" class="p-5 flex items-center bg-black text-white uppercase font-bold leading-snug hover:opacity-75 hover:underline">Join</a></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};