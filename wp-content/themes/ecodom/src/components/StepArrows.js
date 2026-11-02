// Подписи этапов со стрелками вокруг фото («Ход строительства», десктоп ≥1400px).
// Разметка зеркалит render.php блока progress. Положение подписей — из макета,
// кривые стрелок приблизительные (точные векторы из Figma были недоступны).
export const STEP_ARROWS = [
    'M 40 -6 C 40 -40 70 -64 120 -78', // Этап 1 — справа внизу
    'M 50 -6 C 50 -40 20 -64 -30 -78', // Этап 2 — слева внизу
    'M 100 36 C 100 66 130 88 175 100', // Этап 3 — справа вверху
    'M 40 36 C 40 66 10 88 -35 100', // Этап 4 — слева вверху
];

/** Один раз на блок: маркер-наконечник для стрелок. */
export function StepDefs() {
    return (
        <svg className="steps-defs" width="0" height="0" aria-hidden="true">
            <defs>
                <marker id="step-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#1f252d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
            </defs>
        </svg>
    );
}

export default function StepArrows({ steps = [] }) {
    return steps.slice(0, 4).map((label, i) => (
        <span key={i} className={`step step--${i + 1}`}>
            <span className="step__n">Этап {i + 1}</span>
            <span className="step__label">{label}</span>
            <svg className="step__arrow" width="1" height="1" overflow="visible" aria-hidden="true">
                <path d={STEP_ARROWS[i]} fill="none" stroke="#1f252d" strokeWidth="1" strokeLinecap="round" markerEnd="url(#step-arrowhead)" />
            </svg>
        </span>
    ));
}
