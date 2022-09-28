export const Manual = () => {
    return (
        <section class="text-gray-400 bg-black body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:items-start">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex flex-col justify-center text-center">
                    <div class="flex flex-col mb-10 items-center">
                        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                <line x1="8" y1="2" x2="8" y2="18"></line>
                                <line x1="16" y1="6" x2="16" y2="22"></line>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">
                                Before the Hackathon
                            </h2>
                            <p class="leading-relaxed text-base">
                                Useful information before you arrive, like venue locations,
                                accomodation and public transport.
                            </p>
                            <a class="mt-3 text-gray-500 inline-flex items-center" href="#before">
                                Learn more
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col mb-10 items-center">
                        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="18" cy="18" r="3"></circle>
                                <circle cx="6" cy="6" r="3"></circle>
                                <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                                <line x1="6" y1="9" x2="6" y2="21"></line>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">
                                While Hacking
                            </h2>
                            <p class="leading-relaxed text-base">
                                Rules, Prizes and Bounties, Mentors and other information
                                relevant during hackathon.
                            </p>
                            <a class="mt-3 text-gray-500 inline-flex items-center" href="#hacking">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col mb-10 items-center">
                        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">
                                After!
                            </h2>
                            <p class="leading-relaxed text-base">
                                Yes, we mean party. Find the details here and join us on Moon
                                Party.
                            </p>
                            <a class="mt-3 text-gray-500 inline-flex items-center" href="#after">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <article class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="text-5xl mb-4 font-bold text-white">
                        Hacker Manual
                    </h1>
                    <h2 class="text-2xl py-4 text-white">In a nutshell:</h2>
                    <ul>
                        <li class="mb-4 leading-relaxed hover:underline hover:text-white"><a href="https://discord.com/invite/qTCka7qtPZ">Join our Discord</a></li>
                        <li class="mb-4 leading-relaxed hover:underline hover:text-white"><a href="https://dework.ethbrno.cz/">
                            Find a team, Idea or Bounty on Dework</a>
                        </li>

                        <li class="leading-relaxed">
                            Protect privacy
                        </li>
                    </ul>
                    <h2 class="text-2xl py-4 text-white" id="before">Before the Hackathon:</h2>
                    <h3 class="text-xl font-bold">Travel and Accommodation</h3>
                    <p>
                        Public transport in Brno and the rest of the South Moravian Region
                        is provided by Integrovaný dopravní systém Jihomoravského kraje IDS
                        – JMK (the South Moravian Integrated Public Transport System).
                        Tickets are valid for any form of public transport, so you only need
                        to pay attention to how long you are traveling (tickets are valid
                        for specific amounts of time) and which zones you are travelling
                        through. If you’re travelling through the city, a ticket for zones
                        100 and 101 is probably all you’ll need. You can buy tickets from
                        any of the yellow ticket vending machines located at various stops
                        throughout the city, or you can purchase them at information
                        centres, stations, and newsagents. If you have a Czech phone number,
                        you can buy tickets by sending a text message or using a mobile app.
                        You can also pay contactless in the vehicles.
                    </p>
                    <p class="mb-4">
                        The entire transport system is connected with several apps,
                        including Google Maps and Mapy.cz, so feel free to use these to plan
                        your trip.
                    </p>
                    <h3 class="text-xl font-bold">Find a Team</h3>
                    <h3 class="text-xl font-bold">Community</h3>
                    <h3 class="text-xl font-bold">Catering</h3>
                    <h2 class="text-2xl py-4 text-white" id="hacking">While hacking:</h2>
                    <h3 class="text-xl font-bold">Rules</h3>
                    <h3 class="text-xl font-bold">Prizes and Bounties</h3>
                    <h3 class="text-xl font-bold">Getting Help</h3>
                    <h3 class="text-xl font-bold">Submissions</h3>
                    <h3 class="text-xl font-bold">Judging</h3>
                    <h3 class="text-xl font-bold">Side Events</h3>
                    <h2 class="text-2xl py-4 text-white" id="after">After:</h2>
                    <h3 class="text-xl font-bold">Moon Party</h3>
                </article>
            </div>
        </section>
    );
};
