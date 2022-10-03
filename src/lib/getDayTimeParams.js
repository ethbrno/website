import { parseISO, format, formatDistanceToNow, differenceInDays } from 'date-fns';

export function getDayTimeParams(datefrom, dateto) {
    const _date = parseISO(datefrom);
    const _date2 = parseISO(dateto);
    const date = formatDistanceToNow(_date, { addSuffix: true });
    const time = format(_date, "haaa");
    const current = (_date < new Date() < _date2);
    const dayDifferenceNum = Math.ceil(differenceInDays(_date, new Date()));
    return [date, time, current, dayDifferenceNum];

}
