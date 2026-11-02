import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, Button } from '@wordpress/components';
import ImageField from '../../components/ImageField';
import defaultImage from '../../../assets/img/houses.webp';
import playIcon from '../../../assets/img/play.svg';
import house from '../../../assets/img/icons/tab-house.svg';
import garage from '../../../assets/img/icons/tab-garage.svg';
import sauna from '../../../assets/img/icons/tab-sauna.svg';

const ICONS = { house, garage, sauna };

const ICON_OPTIONS = [
    { label: __('Дом', 'ecodom'), value: 'house' },
    { label: __('Гараж', 'ecodom'), value: 'garage' },
    { label: __('Баня', 'ecodom'), value: 'sauna' },
];

const EMPTY_TAB = { icon: 'house', label: '', heading: '', subheading: '', text1: '', text2: '', imageId: 0, imageUrl: '', videoUrl: '' };

export default function Edit({ attributes, setAttributes }) {
    const { tabs } = attributes;
    const [active, setActive] = useState(0);
    const index = Math.min(active, tabs.length - 1);
    const tab = tabs[index];

    const update = (patch) =>
        setAttributes({ tabs: tabs.map((t, i) => (i === index ? { ...t, ...patch } : t)) });

    const removeTab = () => {
        setAttributes({ tabs: tabs.filter((_, i) => i !== index) });
        setActive(Math.max(0, index - 1));
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={`${__('Вкладка', 'ecodom')}: ${tab.label || index + 1}`}>
                    <TextControl label={__('Название под иконкой', 'ecodom')} value={tab.label} onChange={(v) => update({ label: v })} />
                    <SelectControl label={__('Иконка', 'ecodom')} value={tab.icon} options={ICON_OPTIONS} onChange={(v) => update({ icon: v })} />
                    <ImageField
                        url={tab.imageUrl}
                        onSelect={(m) => update({ imageId: m.id, imageUrl: m.url })}
                        onRemove={() => update({ imageId: 0, imageUrl: '' })}
                    />
                    <TextControl
                        label={__('Ссылка на видео (mp4, YouTube, Vimeo)', 'ecodom')}
                        value={tab.videoUrl}
                        onChange={(v) => update({ videoUrl: v })}
                        style={{ marginTop: 16 }}
                    />
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

            <section {...useBlockProps({ className: 'eco-light houses' })}>
                <div className="eco-light__stage houses__stage">
                    <div className="houses__tabs" role="tablist">
                        {tabs.map((t, i) => (
                            <button key={i} type="button" className={`houses__tab${i === index ? ' is-active' : ''}`} onClick={() => setActive(i)}>
                                <span className="houses__tab-icon"><img src={ICONS[t.icon] || house} alt="" /></span>
                                <span className="houses__tab-label">{t.label || __('Без названия', 'ecodom')}</span>
                            </button>
                        ))}
                    </div>

                    <div className="houses__panel" key={index}>
                        <RichText tagName="h2" className="houses__heading" value={tab.heading} onChange={(v) => update({ heading: v })} placeholder={__('Заголовок', 'ecodom')} allowedFormats={[]} />
                        <RichText tagName="p" className="houses__subheading" value={tab.subheading} onChange={(v) => update({ subheading: v })} placeholder={__('Подзаголовок', 'ecodom')} allowedFormats={[]} />
                        <RichText tagName="p" className="houses__text houses__text--1" value={tab.text1} onChange={(v) => update({ text1: v })} placeholder={__('Первый абзац', 'ecodom')} allowedFormats={[]} />
                        <RichText tagName="p" className="houses__text houses__text--2" value={tab.text2} onChange={(v) => update({ text2: v })} placeholder={__('Второй абзац', 'ecodom')} allowedFormats={[]} />
                        <span className="houses__video">
                            <img className="houses__video-img" src={tab.imageUrl || defaultImage} alt="" />
                            <img className="houses__video-play" src={playIcon} alt="" />
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}
