import { useCallback, useEffect, useState } from "preact/hooks";
import { parseISO, format, differenceInHours } from 'date-fns'

function getDayTimeParams(datefrom, dateto) {
    const _date = parseISO(datefrom);
    const _date2 = parseISO(dateto);
    const date = format(_date, "do MMM")
    const time = format(_date, "haaa")
    const time2 = format(_date2, "haaa")
    return [date, time, time2]

}

function isNear(date) {
    const _date = parseISO(date)
    const _now = new Date()
    console.log(_date, _now)
    return (differenceInHours(_date, _now) <= 3)

}

export const Schedule = () => {
    const [scheduleItems, setScheduleItems] = useState([]);
    useEffect(() => {
        fetch("/data/schedule.json")
            .then((r) => r.json())
            .then((d) => setScheduleItems(d));
    }, []);
    const allhighlights = scheduleItems.filter((item) => item.highlight === true);
    const highlights = allhighlights.filter((item) => isNear(item.timefrom))
    //console.log(highlights);
    return (
        <>
            {highlights.length > 0(
                <section class="text-gray-400 bg-black body-font overflow-hidden">
                    <div class="px-5 py-24">
                        <h1 class="md:text-5xl text-3xl mb-4 font-bold text-white">Highlights</h1>
                        {highlights.map(highlight => (
                            <div class="-my-8 divide-y-2 divide-gray-800">
                                <div class="py-8 flex flex-wrap md:flex-nowrap">
                                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span class="font-semibold title-font text-white">{highlight.category}</span>
                                        <span class="mt-1 text-gray-500 text-sm">{getDayTimeParams(highlight.timefrom, highlight.timeto)[0]}</span>
                                        <span class="mt-1 text-gray-100 text-sm font-bold">{getDayTimeParams(highlight.timefrom, highlight.timeto)[1]}</span>
                                    </div>
                                    <div class="md:flex-grow">
                                        <h2 class="text-2xl font-medium text-white title-font mb-2">{highlight.name}</h2>
                                        <p class="leading-relaxed">{highlight.details}</p>
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
        </>
    );
};
