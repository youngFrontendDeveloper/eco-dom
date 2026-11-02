// Календарь-иллюстрация со слайда «Распределение графика работ».
// Разметка зеркалит render.php блока estimate. Числа взяты из макета.
export const CALENDAR_WEEKDAYS = ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'];

// [число, 'muted' — дни соседних месяцев, 'sel' — отмеченные этапы]
export const CALENDAR_DAYS = [
    [27, 'muted'], [28, 'muted'], [29, 'muted'], [30, 'muted'], [1], [2], [3],
    [4], [5], [6], [7], [8], [9, 'sel'], [10],
    [11], [12], [13], [14], [15], [16], [17],
    [18], [19], [20], [21, 'sel'], [22], [23], [24],
    [25], [26], [27], [28], [29, 'sel'], [30], [31],
    [1, 'muted'], [2, 'muted'], [3, 'muted'], [4, 'muted'], [5, 'muted'], [6, 'muted'], [7, 'muted'],
];

export default function ScheduleCalendar({ month, chips = [], onMonthChange }) {
    return (
        <div className="calendar" aria-hidden="true">
            <div className="calendar__head">
                {onMonthChange ? (
                    <input className="calendar__month" value={month} onChange={(e) => onMonthChange(e.target.value)} />
                ) : (
                    <span className="calendar__month">{month}</span>
                )}
                <span className="calendar__arrows">
                    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M15 5l-7 7 7 7" fill="none" stroke="#5f5f5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M9 5l7 7-7 7" fill="none" stroke="#5f5f5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
            </div>
            <div className="calendar__grid">
                {CALENDAR_WEEKDAYS.map((d, i) => (
                    <span key={`w${i}`} className="calendar__cell calendar__cell--weekday">{d}</span>
                ))}
                {CALENDAR_DAYS.map(([day, mod], i) => (
                    <span key={i} className={`calendar__cell${mod ? ` calendar__cell--${mod}` : ''}`}>{day}</span>
                ))}
            </div>
            {chips.slice(0, 3).map((label, i) => (
                <span key={i} className={`calendar__chip calendar__chip--${i + 1}`}>{label}</span>
            ))}
        </div>
    );
}
