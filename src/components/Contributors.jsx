import { useBundle } from "../app";
import snarkdown from "snarkdown";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "preact/hooks";
import { SpeakerEvents } from "./sub/SpeakerEvents";

function createMarkup(md) {
    return { __html: snarkdown(md) };
}

export const Contributors = () => {
    const { isLoading, error, data } = useBundle();
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    const { spec: { speakers } } = data;
    //console.log(data);
    let [isOpen, setIsOpen] = useState(false);
    let [memberDetail, setMemberDetail] = useState();

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function openMember(_member) {
        event.preventDefault();
        setMemberDetail(_member);
        openModal();
    }
    return (
        <>
            {memberDetail && (
                <>
                    <Dialog
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        className="relative z-50"
                    >
                        <div className="fixed inset-0 flex items-center justify-center md:p-4">
                            <Dialog.Panel className="w-full md:w-2/3 bg-black  md:bg-gray-900/90 h-full md:h-4/5 overflow-y-scroll">
                                <Dialog.Title class="sr-only">{memberDetail.name}</Dialog.Title>
                                <button
                                    class="relative left-0 top-0 pl-4 pt-4 text-white inline-flex items-center"
                                    onClick={closeModal}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="w-5 h-5"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>

                                <div class="flex flex-col md:flex-row">
                                    <div class="xl:w-1/3 md:w-1/2 w-full p-4">
                                        <div class=" text-white p-6 h-full">
                                            <img
                                                class="h-40  w-full object-cover object-center mb-6 clippic"
                                                loading="lazy"
                                                src={`https://spec.utxo.cz/22/photos/speakers/${memberDetail.id}-${memberDetail.photos[0].split(":")[0]
                                                    }.${memberDetail.photos[0].split(":")[1]}`}
                                                alt={memberDetail.desc}
                                            />
                                            <h3 class="tracking-widest text-gray-400 text-xs font-medium title-font flex flex-row divide-x">
                                                {memberDetail.tracks &&
                                                    memberDetail.tracks.map((item) => (
                                                        <span class="p-1">{item}</span>
                                                    ))}
                                            </h3>
                                            <div class="flex flex-row mb-4">
                                                <h2 class="text-2xl text-white font-medium title-font">
                                                    {memberDetail.name}
                                                </h2>
                                            </div>
                                            {memberDetail.orgs && (
                                                <p
                                                    class="leading-relaxed text-base"
                                                    dangerouslySetInnerHTML={createMarkup(
                                                        memberDetail.orgs,
                                                    )}
                                                />
                                            )}
                                            {memberDetail.twitter && (
                                                <span class="inline-flex">
                                                    <a class="mt-2 text-gray-500" href={`https://twitter.com/${memberDetail.twitter}`} target="_blank">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                        </svg>
                                                    </a>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div class="xl:w-2/3 md:w-1/2 w-full p-4 h-2/3 overflow-y-scroll ">
                                        <div class="bg-gray-900 text-white p-6 h-full">
                                            {memberDetail.desc && (
                                                <>
                                                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">About</h2>
                                                    <div class="leading-relaxed mb-8 md:max-h-40 overflow-y-scroll">

                                                        <p
                                                            class="leading-relaxed text-base"
                                                            dangerouslySetInnerHTML={createMarkup(
                                                                memberDetail.desc,
                                                            )}
                                                        />

                                                    </div>
                                                </>
                                            )}
                                            <div class="h-1 w-20 bg-gray-500"></div>
                                            <SpeakerEvents speaker={memberDetail.id} />
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Dialog>
                </>
            )}
            <section class="text-gray-400 body-font bg-black">
                <div class=" px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Speakers</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We are here to inspire and help your project succeed.</p>
                        <div class="flex mx-auto border-2 border-gray-800 overflow-hidden mt-6 bg-gray-800">
                            <a class="py-1 px-4  text-white focus:outline-none">Speakers</a>
                            <a class="py-1 px-4 bg-black hover:bg-gray-800 text-gray-300 focus:outline-none" href="/team">Team</a>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {speakers.map((member, index) => (
                            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
                                <div class="bg-gray-900 bg-opacity-40 p-6 h-full">
                                    <img
                                        class="h-40  w-full object-cover object-center mb-6 clippic"
                                        loading="lazy"
                                        src={`https://spec.utxo.cz/22/photos/speakers/${member.id}-${member.photos[0].split(":")[0]
                                            }.${member.photos[0].split(":")[1]}`}
                                        alt={member.desc}
                                    />
                                    <h3 class="tracking-widest text-gray-400 text-xs font-medium title-font flex flex-row divide-x">
                                        {member.tracks &&
                                            member.tracks.map((item) => (
                                                <span class="p-1">{item}</span>
                                            ))}
                                    </h3>
                                    <div class="flex flex-row mb-4">
                                        <h2 class="text-lg text-white font-medium title-font">
                                            {member.name}
                                        </h2>
                                        <button
                                            class="text-gray-100"
                                            onClick={() => {
                                                openMember(member);
                                            }}
                                        >
                                            <svg
                                                class="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    {member.orgs && (
                                        <p
                                            class="leading-relaxed text-base"
                                            dangerouslySetInnerHTML={createMarkup(member.orgs)}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
