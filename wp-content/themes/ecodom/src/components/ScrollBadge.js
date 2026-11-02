import arrowUrl from '../../assets/img/scroll-arrow.svg';

/** Круглый бейдж «Скролл» (разметка зеркалит render.php блока hero). */
export default function ScrollBadge() {
    return (
        <span className="scroll-badge" aria-hidden="true">
            <svg className="scroll-badge__ring" viewBox="0 0 227 227" width="227" height="227">
                <defs>
                    <path id="scroll-badge-circle" d="M113.5 113.5m-100 0a100 100 0 1 1 200 0a100 100 0 1 1 -200 0" />
                </defs>
                <text>
                    <textPath href="#scroll-badge-circle" startOffset="0" textLength="626" lengthAdjust="spacing">
                        {'«Эко Дом» Строительство каркасных домов • '}
                    </textPath>
                </text>
            </svg>
            <img className="scroll-badge__arrow" src={arrowUrl} alt="" />
        </span>
    );
}
