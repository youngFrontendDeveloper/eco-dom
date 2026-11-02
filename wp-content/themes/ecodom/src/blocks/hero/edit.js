import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import ImageField from '../../components/ImageField';
import ScrollBadge from '../../components/ScrollBadge';
import defaultBg from '../../../assets/img/hero-bg.webp';
import arrowRight from '../../../assets/img/arrow-right.svg';

export default function Edit({ attributes, setAttributes }) {
    const { eyebrow, title, subtitle, btnText, btnUrl, scrollUrl, imageUrl } = attributes;
    const bg = imageUrl || defaultBg;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Фон', 'ecodom')}>
                    <ImageField
                        url={imageUrl}
                        onSelect={(m) => setAttributes({ imageId: m.id, imageUrl: m.url })}
                        onRemove={() => setAttributes({ imageId: undefined, imageUrl: '' })}
                    />
                </PanelBody>
                <PanelBody title={__('Ссылки', 'ecodom')}>
                    <TextControl label={__('Кнопка', 'ecodom')} value={btnUrl} onChange={(v) => setAttributes({ btnUrl: v })} />
                    <TextControl label={__('Бейдж «Скролл»', 'ecodom')} value={scrollUrl} onChange={(v) => setAttributes({ scrollUrl: v })} />
                </PanelBody>
            </InspectorControls>

            <section {...useBlockProps({ className: 'hero', style: { backgroundImage: `url(${bg})` } })}>
                <span className="hero__line" />
                <span className="hero__line" />
                <span className="hero__line" />
                <span className="hero__line" />
                <div className="hero__inner">
                    <RichText tagName="p" className="hero__eyebrow" value={eyebrow} onChange={(v) => setAttributes({ eyebrow: v })} placeholder={__('Надпись над заголовком', 'ecodom')} allowedFormats={[]} />
                    <RichText tagName="h1" className="hero__title" value={title} onChange={(v) => setAttributes({ title: v })} placeholder={__('Заголовок', 'ecodom')} allowedFormats={[]} />
                    <RichText tagName="p" className="hero__subtitle" value={subtitle} onChange={(v) => setAttributes({ subtitle: v })} placeholder={__('Подзаголовок', 'ecodom')} allowedFormats={[]} />
                    <span className="btn btn--dark">
                        <img src={arrowRight} alt="" width="21" height="21" />
                        <RichText tagName="span" value={btnText} onChange={(v) => setAttributes({ btnText: v })} placeholder={__('Текст кнопки', 'ecodom')} allowedFormats={[]} />
                    </span>
                </div>
                <ScrollBadge />
            </section>
        </>
    );
}
