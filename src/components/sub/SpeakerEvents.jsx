import { useBundle } from "../../app";
import snarkdown from "snarkdown";
import { EventTime } from "./EventTime";

function createMarkup(md) {
    return { __html: snarkdown(md) };
}

export const SpeakerEvents = ({ speaker }) => {
    const { isLoading, error, data } = useBundle();
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    const { spec: { events } } = data;
    const thisSpeakerEvents = events.filter((item) => item.speakers.includes(speaker));

    console.log(thisSpeakerEvents);
    if (!thisSpeakerEvents) return <h2 class="text-2xl font-medium text-white title-font mb-2">No Events</h2>;

    return (
        <div>
            {thisSpeakerEvents.map((i) => (
                <div class="pb-8 flex border-t-2 border-gray-900 flex-wrap ">
                    <div class="md:w-64 mb-6 flex-shrink-0 flex flex-col">
                        <EventTime id={i.id} />
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-xl font-medium text-white title-font mb-2">{i.name}</h2>
                        <p class="leading-relaxed text-sm" dangerouslySetInnerHTML={createMarkup(
                            i.description,
                        )}></p>
                        <div class=" text-sm inline-flex items-center mt-4">
                            <span class="text-gray-100 bg-gray-800 p-2">{i.difficulty}&nbsp;{i.type}</span>
                            {i.tags.map((tag)=><span class="ml-2 text-gray-400">.{tag}</span>)}
                        </div>
                    </div>
                </div>
            ))}

        </div>

    );
};