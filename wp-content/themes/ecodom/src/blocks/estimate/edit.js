import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import ImageField from '../../components/ImageField';
import ScheduleCalendar from '../../components/ScheduleCalendar';
import estimateImage from '../../../assets/img/estimate.webp';
import projectImage from '../../../assets/img/project-house.webp';
import phoneFrame from '../../../assets/img/phone-frame.webp';
import phoneScreen from '../../../assets/img/phone-screen.webp';

const DEFAULT_IMAGES = { estimate: estimateImage, project: projectImage, report: phoneScreen };

const TYPE_LABELS = {
    estimate: __('Смета', 'ecodom'),
    project: __('Проект дома', 'ecodom'),
    schedule: __('График работ', 'ecodom'),
    report: __('Отчётность', 'ecodom'),
};

export default function Edit({ attributes, setAttributes }) {
    const { slides, autoplay } = attributes;
    const [active, setActive] = useState(0);
    const index = Math.min(active, slides.length - 1);
    const slide = slides[index];

    const update = (patch) =>
        setAttributes({ slides: slides.map((s, i) => (i === index ? { ...s, ...patch } : s)) });

    const updateChip = (n, value) => {
        const chips = [...(slide.chips || [])];
        chips[n] = value;
        update({ chips });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={`${__('Слайд', 'ecodom')}: ${TYPE_LABELS[slide.type] || index + 1}`}>
                    {slide.type !== 'schedule' && (
                        <>
                            <p style={{ marginTop: 0 }}>
                                {slide.type === 'report' ? __('Скриншот на экране телефона', 'ecodom') : __('Изображение', 'ecodom')}
                            </p>
                            <ImageField
                                url={slide.imageUrl}
                                onSelect={(m) => update({ imageId: m.id, imageUrl: m.url })}
                                onRemove={() => update({ imageId: 0, imageUrl: '' })}
                            />
                        </>
                    )}
                    {slide.type === 'schedule' && (
                        <>
                            <TextControl label={__('Месяц в календаре', 'ecodom')} value={slide.month} onChange={(v) => update({ month: v })} />
                            {[0, 1, 2].map((n) => (
                                <TextControl key={n} label={`${__('Этап', 'ecodom')} ${n + 1}`} value={(slide.chips || [])[n] || ''} onChange={(v) => updateChip(n, v)} />
                            ))}
                        </>
                    )}
                </PanelBody>
                <PanelBody title={__('Слайдер', 'ecodom')} initialOpen={false}>
                    <ToggleControl
                        label={__('Автопрокрутка', 'ecodom')}
                        checked={autoplay}
                        onChange={(v) => setAttributes({ autoplay: v })}
                    />
                </PanelBody>
            </InspectorControls>

            <section {...useBlockProps({ className: 'eco-light estimate' })}>
                <div className="eco-light__stage estimate__stage">
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />

                    <div className={`estimate__slide estimate__slide--${slide.type}`} key={index}>
                        {slide.type === 'project' && <span className="estimate__panel" />}
                        <div className="estimate__text">
                            <RichText tagName="h2" className="estimate__heading" value={slide.heading} onChange={(v) => update({ heading: v })} placeholder={__('Заголовок', 'ecodom')} allowedFormats={[]} />
                            <RichText tagName="p" className="estimate__paragraph" value={slide.text} onChange={(v) => update({ text: v })} placeholder={__('Текст', 'ecodom')} allowedFormats={['core/link']} />
                        </div>
                        {(slide.type === 'estimate' || slide.type === 'project') && (
                            <img className="estimate__image" src={slide.imageUrl || DEFAULT_IMAGES[slide.type]} alt="" />
                        )}
                        {slide.type === 'schedule' && (
                            <ScheduleCalendar month={slide.month} chips={slide.chips} onMonthChange={(v) => update({ month: v })} />
                        )}
                        {slide.type === 'report' && (
                            <div className="phone">
                                <img className="phone__screen" src={slide.imageUrl || DEFAULT_IMAGES.report} alt="" />
                                <img className="phone__frame" src={phoneFrame} alt="" />
                            </div>
                        )}
                    </div>

                    <div className="estimate__dots">
                        {slides.map((s, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`estimate__dot${i === index ? ' is-active' : ''}`}
                                aria-label={TYPE_LABELS[s.type]}
                                onClick={() => setActive(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
