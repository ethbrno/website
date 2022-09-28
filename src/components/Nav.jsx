export const Nav = () => {
    return (
        <header class="header bg-white w-full sticky top-0 container mx-auto">

            <a href="/" class="inline-block ml-3"><img src="logo3.png" alt="logotype" class="rounded-full bg-black w-16 h-16 ml-5 mt-4" /></a>

            <input class="side-menu" type="checkbox" id="side-menu" />
            <label class="hamb" for="side-menu"><span class="hamb-line mt-2"></span></label>
            <nav class="nav mr-4 flex flex-col">
                <ul class="menu">
                    <li><a href="/" class="block hover:underline">Home</a></li>
                    <li><a href="/manifesto" class="block hover:underline">Manifesto</a> </li>
                    <li><a href="/manual" class="block hover:underline">Hacker Manual</a></li>
                    <li><a href="/schedule" class="block hover:underline">Schedule</a></li>
                    <li><a href="/venues" class="block hover:underline">Venues</a></li>
                    <li><a href="/contributors" class="block hover:underline">Contributors</a></li>
                    <li><a href="/team" class="block hover:underline">Team</a></li>
                </ul>
                <span class="text-xs text-end mr-4">NOVEMBER 11-13, 2022 @ BRNO, CZECH REPUBLIC</span>
            </nav>
        </header>
    )
}