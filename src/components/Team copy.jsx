import { useBundle } from "../app";

export const Team = () => {
    const { isLoading, error, data } = useBundle();
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    //console.log(data);
    const { spec: { team: { persons } } } = data;
    //console.log(Object.values(persons));
    return (
        <>
            <section class="text-gray-400 bg-black body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">These are the people who turned ETHBrno dream into reality.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {Object.values(persons).map((member, index) =>
                            <div class="p-4 w-full lg:w-1/2">
                                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`https://loremflickr.com/200/200/human?lock=${index}`} />
                                    <div class="flex-grow sm:pl-8">
                                        <h2 class="title-font font-medium text-lg text-white">{member.name}</h2>
                                        <h3 class="text-gray-500 mb-3">Asi nějaká role?</h3>
                                        <p class="mb-4">{member.desc}</p>
                                        <span class="inline-flex">
                                            <a class="ml-2 text-gray-500" href={`https://twitter.com/${member.twitter}`} target="_blank">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    );
};