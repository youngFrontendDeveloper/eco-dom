import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';

export default function Edit({ attributes, setAttributes }) {
    const { heading, count, btnText, btnUrl } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Содержимое', 'ecodom')}>
                    <TextControl label={__('Заголовок', 'ecodom')} value={heading} onChange={(v) => setAttributes({ heading: v })} />
                    <RangeControl
                        label={__('Сколько проектов показывать', 'ecodom')}
                        value={count}
                        min={3}
                        max={20}
                        onChange={(v) => setAttributes({ count: v })}
                    />
                    <p className="components-base-control__help">
                        {__('Проекты добавляются в меню «Проекты домов». Пока их нет, показаны демо-карточки.', 'ecodom')}
                    </p>
                </PanelBody>
                <PanelBody title={__('Кнопка', 'ecodom')}>
                    <TextControl label={__('Текст', 'ecodom')} value={btnText} onChange={(v) => setAttributes({ btnText: v })} />
                    <TextControl
                        label={__('Ссылка', 'ecodom')}
                        help={__('Пусто — ведёт на архив проектов.', 'ecodom')}
                        value={btnUrl}
                        onChange={(v) => setAttributes({ btnUrl: v })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps()}>
                <ServerSideRender block={metadata.name} attributes={attributes} />
            </div>
        </>
    );
}
