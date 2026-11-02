import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, Button } from '@wordpress/components';
import ImageField from '../../components/ImageField';
import introImage from '../../../assets/img/about-video.webp';
import personImage from '../../../assets/img/about-manager.webp';
import listImage from '../../../assets/img/about-why.webp';
import playIcon from '../../../assets/img/play.svg';

const DEFAULT_IMAGES = { intro: introImage, person: personImage, list: listImage };

const LAYOUTS = [
    { label: __('Описание + видео', 'ecodom'), value: 'intro' },
    { label: __('Руководитель (фото + приветствие)', 'ecodom'), value: 'person' },
    { label: __('Фото + список', 'ecodom'), value: 'list' },
];

const EMPTY_TAB = { layout: 'intro', label: '', heading: '', text1: '', text2: '', list: '', imageId: 0, imageUrl: '', videoUrl: '' };

export default function Edit({ attributes, setAttributes }) {
    const { tabs, sideLabel } = attributes;
    const [active, setActive] = useState(0);
    const index = Math.min(active, tabs.length - 1);
    const tab = tabs[index];
    const layout = tab.layout || 'intro';
    const image = tab.imageUrl || DEFAULT_IMAGES[layout];

    const updateTab = (patch) =>
        setAttributes({ tabs: tabs.map((t, i) => (i === index ? { ...t, ...patch } : t)) });

    const removeTab = () => {
        setAttributes({ tabs: tabs.filter((_, i) => i !== index) });
        setActive(Math.max(0, index - 1));
    };

    const heading = (
        <RichText tagName="h2" className="about__heading" value={tab.heading} onChange={(v) => updateTab({ heading: v })} placeholder={__('Заголовок', 'ecodom')} allowedFormats={[]} />
    );

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Вкладка', 'ecodom') + `: ${tab.label || index + 1}`}>
                    <TextControl label={__('Название в меню', 'ecodom')} value={tab.label} onChange={(v) => updateTab({ label: v })} />
                    <SelectControl label={__('Раскладка', 'ecodom')} value={layout} options={LAYOUTS} onChange={(v) => updateTab({ layout: v })} />
                    <ImageField
                        url={tab.imageUrl}
                        onSelect={(m) => updateTab({ imageId: m.id, imageUrl: m.url })}
                        onRemove={() => updateTab({ imageId: 0, imageUrl: '' })}
                    />
                    {layout === 'intro' && (
                        <TextControl
                            label={__('Ссылка на видео (mp4, YouTube, Vimeo)', 'ecodom')}
                            value={tab.videoUrl}
                            onChange={(v) => updateTab({ videoUrl: v })}
                            style={{ marginTop: 16 }}
                        />
                    )}
                    {tabs.length > 1 && (
                        <Button variant="link" isDestructive onClick={removeTab} style={{ marginTop: 16 }}>
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
                    <TextControl label={__('Подпись сбоку', 'ecodom')} value={sideLabel} onChange={(v) => setAttributes({ sideLabel: v })} style={{ marginTop: 16 }} />
                </PanelBody>
            </InspectorControls>

            <section {...useBlockProps({ className: 'about' })}>
                <div className="about__stage">
                    <span className="about__line about__line--1" />
                    <span className="about__line about__line--2" />
                    <span className="about__line about__line--3" />
                    <span className="about__stub about__stub--1" />
                    <span className="about__stub about__stub--2" />
                    <span className="about__stub about__stub--3" />
                    <span className="about__side-label">{sideLabel}</span>

                    <ul className="about__nav" role="tablist">
                        {tabs.map((t, i) => (
                            <li key={i} className={`about__nav-item${i === index ? ' is-active' : ''}`}>
                                <button type="button" onClick={() => setActive(i)}>{t.label || __('Без названия', 'ecodom')}</button>
                            </li>
                        ))}
                    </ul>

                    <div className={`about__panel about__panel--${layout}`} key={`${index}-${layout}`}>
                        {layout === 'person' && (
                            <>
                                <img className="about__photo" src={image} alt="" />
                                {heading}
                                <RichText tagName="p" className="about__text" value={tab.text1} onChange={(v) => updateTab({ text1: v })} placeholder={__('Текст под заголовком', 'ecodom')} allowedFormats={['core/link']} />
                            </>
                        )}

                        {layout === 'list' && (
                            <>
                                <img className="about__photo" src={image} alt="" />
                                <RichText tagName="ul" multiline="li" className="about__list" value={tab.list} onChange={(v) => updateTab({ list: v })} placeholder={__('Пункты списка', 'ecodom')} allowedFormats={['core/link']} />
                            </>
                        )}

                        {layout === 'intro' && (
                            <>
                                {heading}
                                <RichText tagName="p" className="about__text about__text--1" value={tab.text1} onChange={(v) => updateTab({ text1: v })} placeholder={__('Первый абзац', 'ecodom')} allowedFormats={['core/link']} />
                                <RichText tagName="p" className="about__text about__text--2" value={tab.text2} onChange={(v) => updateTab({ text2: v })} placeholder={__('Второй абзац', 'ecodom')} allowedFormats={['core/link']} />
                                <span className="about__video">
                                    <img className="about__video-img" src={image} alt="" />
                                    <img className="about__video-play" src={playIcon} alt="" />
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
