import { useCallback, useEffect, useState } from "preact/hooks";
import { parseISO, format, differenceInHours, formatDistanceToNow } from 'date-fns';
import { useBundle } from "../app";
import { Speaker } from "./sub/Speaker";

function getDayTimeParams(datefrom, dateto) {
    const _date = parseISO(datefrom);
    const _date2 = parseISO(dateto);
    const date = formatDistanceToNow(_date, { addSuffix: true });
    const time = format(_date, "haaa");
    const time2 = format(_date2, "haaa");
    return [date, time, time2];

}

function isNear(date) {
    const _date = parseISO(date);
    const _now = new Date();
    return (Math.abs(differenceInHours(_date, _now)) < 1);

}


export const Schedule = () => {
    const { isLoading, error, data } = useBundle();

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    //console.log(data);
    const { spec: { schedule, events, speakers } } = data;
    //console.log(speakers);
    const currentEvents = schedule.filter((item) => isNear(item.period?.start));
    const eventDetail = (scheduleid) => events.filter((item) => item.id === scheduleid);
    const speakerDetail = (speakername) => speakers.filter((item) => item.id === speakername);
    return (
        <>
            {currentEvents.length > 0 && (
                <section class="text-gray-400 bg-black body-font overflow-hidden">
                    <div class="px-5 py-24">
                        <h1 class="md:text-5xl text-3xl mb-4 font-bold text-white">Within hour</h1>
                        {currentEvents.map(highlight => (
                            <div class="-my-8 divide-y-2 divide-gray-800">
                                <div class="py-8 flex flex-wrap md:flex-nowrap">
                                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span class="font-semibold title-font text-white">{highlight.stage}</span>
                                        <span class="mt-1 text-gray-500 text-sm">{getDayTimeParams(highlight.period.start, highlight.period.end)[0]}</span>
                                        <span class="mt-1 text-gray-100 text-sm font-bold">{getDayTimeParams(highlight.period.start, highlight.period.end)[1]}</span>
                                    </div>
                                    <div class="md:flex-grow">
                                        <h2 class="text-2xl font-medium text-white title-font mb-2">{highlight.event}</h2>
                                        <p class="leading-relaxed">{eventDetail(highlight.event)}</p>
                                        <a class="text-gray-400 inline-flex items-center mt-4">Learn More
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            <section class="text-gray-400 bg-black body-font overflow-hid   den">
                <div class="px-5 py-24">
                    <h1 class="md:text-5xl text-3xl mb-4 font-bold text-white">Schedule</h1>
                    {schedule.map(item => (
                        <div class="-my-8 divide-y-2 divide-gray-800">
                            <div class="py-10 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="font-semibold title-font text-white">{item.stage}</span>
                                    <span class="mt-1 text-gray-500 text-sm">{getDayTimeParams(item.period.start, item.period.end)[0]}</span>
                                    <span class="mt-1 text-gray-100 text-sm font-bold">{getDayTimeParams(item.period.start, item.period.end)[1]}</span>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-white title-font mb-2">{eventDetail(item.event)[0].name}</h2>
                                    <div class="flex gap-2">{eventDetail(item.event)[0].speakers.map((speaker) => (<Speaker speaker={speakerDetail(speaker)[0]} />))}</div>
                                    <a class="text-gray-400 inline-flex items-center mt-4 hidden">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
