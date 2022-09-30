import { useBundle } from "../app";
import { useState } from "preact/hooks";
import { EventRow } from "./sub/EventRow";

export const Schedule = () => {
    const { isLoading, error, data } = useBundle();
    const [filter, setFilter] = useState([-2, -1, 0, 1, 2, 3]);
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    //console.log(data);

    if (!data) {
        return (
            <>
                <section class="text-gray-400 bg-black body-font overflow-hidden">
                    <div class="px-5 py-24">
                        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto mb-4">
                            <h1 class="flex-grow sm:pr-16 md:text-5xl text-3xl mb-4 font-bold  text-white">
                                No Schedule
                            </h1>
                        </div>
                    </div>
                </section>
            </>
        );
    }
    const { spec: { schedule, events } } = data;
    const eventDetail = (scheduleid) =>
        events.filter((item) => item.id === scheduleid);

    return (
        <>
            <section class="text-gray-400 bg-black body-font overflow-hidden">
                <div class="px-5 py-24">
                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto mb-4">
                        <h1 class="flex-grow sm:pr-16 md:text-5xl text-3xl mb-4 font-bold  text-white">
                            Schedule
                        </h1>
                        <button
                            class="flex-shrink-0 text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600  mt-10 sm:mt-0 mr-2"
                            onclick={() => setFilter([-118, -117, -116])}
                        >
                            All
                        </button>
                        <button
                            class="flex-shrink-0 text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600  mt-10 sm:mt-0 mr-2"
                            onclick={() => setFilter([-118])}
                        >
                            Today
                        </button>
                        <button
                            class="flex-shrink-0 text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600  mt-10 sm:mt-0"
                            onclick={() => setFilter([-116])}
                        >
                            Tomorrow
                        </button>
                    </div>
                    {schedule.map((item) => (
                        <EventRow
                            item={item}
                            eventdetail={eventDetail(item.event)[0]}
                            filter={filter}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};
