import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import ImageField from '../../components/ImageField';
import house1 from '../../../assets/img/calculator/house-1.webp';
import house2 from '../../../assets/img/calculator/house-2.webp';
import house3 from '../../../assets/img/calculator/house-3.webp';
import house4 from '../../../assets/img/calculator/house-4.webp';
import house5 from '../../../assets/img/calculator/house-5.webp';
import house6 from '../../../assets/img/calculator/house-6.webp';

const FIRST_STEP_IMAGES = [house1, house2, house3, house4, house5, house6];

const pad = (n) => String(n).padStart(2, '0');

const CheckIcon = () => (
    <svg className="calc__check-icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path d="M7 12.5l3.2 3.2L17 8.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/**
 * Предпросмотр делаем на клиенте, а не через ServerSideRender: все атрибуты калькулятора
 * в адресной строке (~10 КБ) превышают лимит Apache (8190 байт) и запрос падал.
 */
export default function Edit({ attributes, setAttributes }) {
    const { eyebrow, heading, steps, nextText, finalTitle, finalHint, submitText } = attributes;
    const total = steps.length;
    const [active, setActive] = useState(0); // 0..total-1 — шаги, total — форма
    const isForm = active >= total;
    const step = isForm ? null : steps[active];

    const updateStep = (si, patch) =>
        setAttributes({ steps: steps.map((s, i) => (i === si ? { ...s, ...patch } : s)) });

    const updateOption = (si, oi, patch) =>
        updateStep(si, { options: steps[si].options.map((o, i) => (i === oi ? { ...o, ...patch } : o)) });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Заголовки', 'ecodom')}>
                    <TextControl label={__('Надпись над заголовком', 'ecodom')} value={eyebrow} onChange={(v) => setAttributes({ eyebrow: v })} />
                    <TextControl label={__('Заголовок', 'ecodom')} value={heading} onChange={(v) => setAttributes({ heading: v })} />
                    <TextControl label={__('Кнопка «Далее»', 'ecodom')} value={nextText} onChange={(v) => setAttributes({ nextText: v })} />
                </PanelBody>

                {steps.map((s, si) => (
                    <PanelBody key={si} title={`${__('Шаг', 'ecodom')} ${si + 1}: ${s.question}`} initialOpen={false}>
                        <Button variant="tertiary" onClick={() => setActive(si)}>{__('Показать этот шаг в блоке', 'ecodom')}</Button>
                        <TextControl label={__('Вопрос', 'ecodom')} value={s.question} onChange={(v) => updateStep(si, { question: v })} />
                        {s.options.map((option, oi) => (
                            <div key={oi} style={{ marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #ddd' }}>
                                <TextControl label={`${__('Вариант', 'ecodom')} ${oi + 1}`} value={option.label} onChange={(v) => updateOption(si, oi, { label: v })} />
                                {s.layout !== 'tiles' && (
                                    <ImageField
                                        url={option.imageUrl}
                                        onSelect={(m) => updateOption(si, oi, { imageId: m.id, imageUrl: m.url })}
                                        onRemove={() => updateOption(si, oi, { imageId: 0, imageUrl: '' })}
                                    />
                                )}
                                {s.options.length > 2 && (
                                    <Button variant="link" isDestructive onClick={() => updateStep(si, { options: s.options.filter((_, i) => i !== oi) })} style={{ display: 'block', marginTop: 8 }}>
                                        {__('Удалить вариант', 'ecodom')}
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button variant="secondary" onClick={() => updateStep(si, { options: [...s.options, { label: '', imageId: 0, imageUrl: '' }] })}>
                            {__('Добавить вариант', 'ecodom')}
                        </Button>
                    </PanelBody>
                ))}

                <PanelBody title={__('Форма заявки', 'ecodom')} initialOpen={false}>
                    <Button variant="tertiary" onClick={() => setActive(total)}>{__('Показать форму в блоке', 'ecodom')}</Button>
                    <TextControl label={__('Заголовок', 'ecodom')} value={finalTitle} onChange={(v) => setAttributes({ finalTitle: v })} />
                    <TextControl label={__('Подсказка про мессенджер', 'ecodom')} value={finalHint} onChange={(v) => setAttributes({ finalHint: v })} />
                    <TextControl label={__('Текст кнопки', 'ecodom')} value={submitText} onChange={(v) => setAttributes({ submitText: v })} />
                    <p className="components-base-control__help">
                        {__('Заявки приходят на почту администратора и сохраняются в разделе «Заявки».', 'ecodom')}
                    </p>
                </PanelBody>
            </InspectorControls>

            <section {...useBlockProps({ className: 'eco-light calc' })}>
                <div className="eco-light__stage calc__stage">
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />

                    <p className="calc__eyebrow">{eyebrow}</p>
                    <h2 className="calc__heading">{heading}</h2>

                    <div className="calc__panel">
                        {!isForm && (
                            <div className={`calc__step calc__step--${step.layout}`}>
                                <p className="calc__question">{step.question}</p>
                                <div className="calc__options">
                                    {step.options.map((option, oi) => {
                                        const img = option.imageUrl || (active === 0 ? FIRST_STEP_IMAGES[oi] : '');
                                        return (
                                            <span key={oi} className="calc__option">
                                                {step.layout === 'tiles' ? (
                                                    <span className="calc__tile">
                                                        <span className="calc__check"><CheckIcon /></span>
                                                        <span className="calc__label">{option.label}</span>
                                                    </span>
                                                ) : (
                                                    <span className="calc__card">
                                                        <span className="calc__img" style={img ? { backgroundImage: `url(${img})` } : undefined} />
                                                        <span className="calc__check"><CheckIcon /></span>
                                                        <span className="calc__label">{option.label}</span>
                                                    </span>
                                                )}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {isForm && (
                            <div className="calc__step calc__step--final">
                                <p className="calc__question">{finalTitle}</p>
                                <p className="calc__hint">{finalHint}</p>
                                <div className="calc__messengers">
                                    {['Telegram', 'Viber', 'What’s App'].map((name) => (
                                        <span key={name} className="calc__messenger">
                                            <span className="calc__messenger-icon" />
                                            <span className="calc__messenger-name">{name}</span>
                                        </span>
                                    ))}
                                </div>
                                <div className="calc__fields">
                                    {['Ваше имя', 'Телефон'].map((label) => (
                                        <span key={label} className="calc__field"><span>{label}</span><input type="text" disabled /></span>
                                    ))}
                                </div>
                                <label className="calc__consent">
                                    <input className="calc__consent-input" type="checkbox" disabled />
                                    <span>
                                        Я даю согласие на обработку моих персональных данных в целях оформления и исполнения заказа, а также подтверждаю, что ознакомился(ась) с
                                        {' '}<a href="/privacy-policy">Политикой конфиденциальности</a>
                                        {' '}и{' '}
                                        <a href="/user-agreement">Пользовательским соглашением</a>
                                    </span>
                                </label>
                                <span className="calc__submit">{submitText}</span>
                            </div>
                        )}

                        <span className="calc__progress">
                            <span className="calc__progress-fill" style={{ width: `${(Math.min(active + 1, total) / total) * 100}%` }} />
                        </span>
                        <span className="calc__counter">
                            <b className="calc__current">{pad(Math.min(active + 1, total))}</b>
                            <i>/</i>
                            <span className="calc__total">{pad(total)}</span>
                        </span>
                        {!isForm && <span className="calc__next">{nextText}</span>}
                    </div>

                    <div style={{ position: 'absolute', left: 52, bottom: 16, display: 'flex', gap: 6 }}>
                        {[...steps.map((_, i) => i + 1), __('Форма', 'ecodom')].map((label, i) => (
                            <Button key={i} variant={i === active ? 'primary' : 'secondary'} size="small" onClick={() => setActive(i)}>
                                {label}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
