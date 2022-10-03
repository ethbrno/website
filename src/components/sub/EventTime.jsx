import { useBundle } from "../../app";
import { getDayTimeParams } from '../../lib/getDayTimeParams';

function evtFilt(schid, evtid) {
    //console.log(schid === evtid, schid, evtid);
    return schid === evtid;
}

export const EventTime = ({ id }) => {
    const { isLoading, error, data } = useBundle();
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    const { spec: { schedule } } = data;
    const eventSchedule = schedule.filter((item) => evtFilt(item.event, id));
    //console.log(eventSchedule);

    //console.log(data);
    return (

        <>
            <span class="mt-1 text-gray-500 text-sm">{getDayTimeParams(eventSchedule[0].period.start, eventSchedule[0].period.end)[1]}</span>
            <span class="font-semibold title-font text-white">{getDayTimeParams(eventSchedule[0].period.start, eventSchedule[0].period.end)[0]}</span>

        </>
    );
};