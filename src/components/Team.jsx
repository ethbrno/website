import { useBundle } from "../app";
import snarkdown from "snarkdown";

function createMarkup(md) {
    return { __html: snarkdown(md) };
}

export const Team = () => {
    const { isLoading, error, data } = useBundle();
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    //console.log(data);
    const { spec: { team: { persons } } } = data;
    //console.log(Object.values(persons));
    return (
        <>
            <section class="text-gray-400 body-font bg-black">
                <div class=" px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Team</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We are here to inspire and help your project succeed.</p>
                        <div class="flex mx-auto border-2 border-black overflow-hidden mt-6 bg-black">
                            <a class="py-1 px-4 bg-black hover:bg-black text-gray-300 focus:outline-none" href="/contributors">Speakers</a>
                            <a class="py-1 px-4   text-white focus:outline-none">Team</a>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {Object.values(persons).map((member, index) => (
                            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
                                <div class="bg-black bg-opacity-40 p-6 h-full">
                                    {member.photos && (
                                        <img
                                            class="h-40  w-full object-cover object-center mb-6 clippic"
                                            loading="lazy"
                                            src={`https://spec.utxo.cz/22/photos/speakers/${member.id}-${member.photos[0].split(":")[0]
                                                }.${member.photos[0].split(":")[1]}`}
                                            alt={member.desc}
                                        />
                                    )}
                                    {member.tracks && (
                                        <h3 class="tracking-widest text-gray-400 text-xs font-medium title-font flex flex-row divide-x">
                                            {member.tracks &&
                                                member.tracks.map((item) => (
                                                    <span class="p-1">{item}</span>
                                                ))}
                                        </h3>
                                    )}
                                    <div class="flex flex-row mb-4">
                                        <h2 class="text-lg text-white font-medium title-font">
                                            {member.name}
                                        </h2>
                                    </div>

                                    {member.orgs && (
                                        <p
                                            class="leading-relaxed text-base"
                                            dangerouslySetInnerHTML={createMarkup(member.orgs)}
                                        />
                                    )}
                                    <span class="inline-flex">
                                        <a class="ml-2 text-gray-500" href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};