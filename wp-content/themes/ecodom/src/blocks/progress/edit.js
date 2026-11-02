import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import ImageField from '../../components/ImageField';
import StepArrows, { StepDefs } from '../../components/StepArrows';
import foundation from '../../../assets/img/progress/foundation.webp';
import assembly from '../../../assets/img/progress/assembly.webp';
import engineering from '../../../assets/img/progress/engineering.webp';
import finishing from '../../../assets/img/progress/finishing.webp';
import review from '../../../assets/img/progress/review.webp';

// Фото по умолчанию — по позиции вкладки (как в render.php).
const DEFAULTS = [foundation, assembly, engineering, finishing, review];

const EMPTY_TAB = { label: '', imageId: 0, imageUrl: '', videoUrl: '', steps: [] };

export default function Edit({ attributes, setAttributes }) {
    const { heading, tabs } = attributes;
    const [active, setActive] = useState(0);
    const index = Math.min(active, tabs.length - 1);
    const tab = tabs[index];
    const imageOf = (i) => tabs[i].imageUrl || DEFAULTS[i] || DEFAULTS[0];
    const nextIndex = (index + 1) % tabs.length;

    const update = (patch) =>
        setAttributes({ tabs: tabs.map((t, i) => (i === index ? { ...t, ...patch } : t)) });

    const updateStep = (n, value) => {
        const steps = [...(tab.steps || [])];
        steps[n] = value;
        update({ steps: steps.filter((s, i) => s !== '' || i < steps.length - 1) });
    };

    const removeTab = () => {
        setAttributes({ tabs: tabs.filter((_, i) => i !== index) });
        setActive(Math.max(0, index - 1));
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={`${__('Вкладка', 'ecodom')}: ${tab.label || index + 1}`}>
                    <TextControl label={__('Название', 'ecodom')} value={tab.label} onChange={(v) => update({ label: v })} />
                    <ImageField
                        url={tab.imageUrl}
                        onSelect={(m) => update({ imageId: m.id, imageUrl: m.url })}
                        onRemove={() => update({ imageId: 0, imageUrl: '' })}
                    />
                    <TextControl
                        label={__('Ссылка на видео (mp4, YouTube, Vimeo)', 'ecodom')}
                        help={__('Если указана, на фото появится кнопка play.', 'ecodom')}
                        value={tab.videoUrl}
                        onChange={(v) => update({ videoUrl: v })}
                        style={{ marginTop: 16 }}
                    />
                    {[0, 1, 2, 3].map((n) => (
                        <TextControl
                            key={n}
                            label={`${__('Подпись этапа', 'ecodom')} ${n + 1}`}
                            help={n === 0 ? __('Подписи со стрелками видны на десктопе от 1400 px.', 'ecodom') : undefined}
                            value={(tab.steps || [])[n] || ''}
                            onChange={(v) => updateStep(n, v)}
                        />
                    ))}
                    {tabs.length > 1 && (
                        <Button variant="link" isDestructive onClick={removeTab}>
                            {__('Удалить вкладку', 'ecodom')}
                        </Button>
                    )}
                </PanelBody>
                <PanelBody title={__('Все вкладки', 'ecodom')} initialOpen={false}>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setAttributes({ tabs: [...tabs, { ...EMPTY_TAB, label: __('Новая вкладка', 'ecodom') }] });
                            setActive(tabs.length);
                        }}
                    >
                        {__('Добавить вкладку', 'ecodom')}
                    </Button>
                </PanelBody>
            </InspectorControls>

            <section {...useBlockProps({ className: 'eco-light progress' })}>
                <div className="eco-light__stage progress__stage">
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <StepDefs />

                    <RichText tagName="h2" className="progress__heading" value={heading} onChange={(v) => setAttributes({ heading: v })} placeholder={__('Заголовок', 'ecodom')} allowedFormats={[]} />

                    <div className="progress__tabs" role="tablist">
                        {tabs.map((t, i) => (
                            <button key={i} type="button" className={`progress__tab${i === index ? ' is-active' : ''}`} onClick={() => setActive(i)}>
                                {t.label || __('Без названия', 'ecodom')}
                            </button>
                        ))}
                    </div>

                    <div className="progress__panel" key={index}>
                        <div className="progress__card">
                            {tabs.length > 1 && <img className="progress__next" src={imageOf(nextIndex)} alt="" />}
                            <img className="progress__photo" src={imageOf(index)} alt="" />
                        </div>
                        <StepArrows steps={tab.steps} />
                    </div>
                </div>
            </section>
        </>
    );
}
