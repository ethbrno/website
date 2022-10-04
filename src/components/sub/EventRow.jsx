import { useRef, useEffect } from "preact/hooks";
import { parseISO, differenceInHours } from 'date-fns';
import { Speaker } from "./Speaker";
import { useBundle } from "../../app";
import { getDayTimeParams } from '../../lib/getDayTimeParams';


const itemOpacity = (start) => {
    const _start = parseISO(start);
    const _now = new Date();
    const difference = differenceInHours(_start, _now);
    const diffnumber = Math.abs(Math.ceil(difference));
    switch (diffnumber) {
        case 1:
            return 100;
        case 2:
            return 80;
        case 3:
            return 50;
        case (diffnumber < 48):
            return 30;
        default:
            //return 30;
            return 100;

    }
};

export const EventRow = ({ item, eventdetail, filter }) => {
    const { isLoading, error, data } = useBundle();
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    const dayDiffNumber = getDayTimeParams(item.period.start, item.period.end)[3];
    if (!filter.includes(dayDiffNumber)) return;

    const { spec: { speakers } } = data;
    const speakerDetail = (speakername) => speakers.filter((item) => item.id === speakername);
    const isCurrent = getDayTimeParams(item.period.start, item.period.end)[2];
    const myRef = useRef(null);
    useEffect(() => {
        //skipping for now, no current events
        //myRef.current.scrollIntoView();
        return () => {
            // mmm..cleanup ref?
        };
    }, []);

    return (
        <div class={` divide-y-2 divide-black opacity-${itemOpacity(item.period.start)}`} id={item.id} key={item.id}>
            {isCurrent ? (<span ref={myRef}></span>) : (<span></span>)}
            <div class="py-10 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-white">{item.stage}</span>
                    <span class="mt-1 text-gray-500 text-sm">{getDayTimeParams(item.period.start, item.period.end)[0]}</span>
                    <span class="mt-1 text-gray-100 text-sm font-bold">{getDayTimeParams(item.period.start, item.period.end)[1]}</span>
                </div>
                <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-white title-font mb-2">{eventdetail.name}</h2>
                    <div class="flex gap-2">{eventdetail.speakers.map((speaker) => (<Speaker speaker={speakerDetail(speaker)[0]} />))}</div>
                    <div class="text-gray-400 inline-flex items-center mt-4">
                        {eventdetail.tags.map((tag) => (<span class="px-3 py-1 bg-black rounded-full text-xs m-2">{tag}</span>))}
                    </div>
                </div>
            </div>
        </div>
    );
};
