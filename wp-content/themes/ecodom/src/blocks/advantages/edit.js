import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, Button } from '@wordpress/components';
import ImageField from '../../components/ImageField';
import defaultImage from '../../../assets/img/house-hand.webp';
import project from '../../../assets/img/icons/project.svg';
import price from '../../../assets/img/icons/price.svg';
import house from '../../../assets/img/icons/house.svg';
import program from '../../../assets/img/icons/program.svg';
import guarantee from '../../../assets/img/icons/guarantee.svg';

const ICONS = { project, price, house, program, guarantee };

const ICON_OPTIONS = [
    { label: __('Документ', 'ecodom'), value: 'project' },
    { label: __('Деньги', 'ecodom'), value: 'price' },
    { label: __('Дом', 'ecodom'), value: 'house' },
    { label: __('Здание (программы)', 'ecodom'), value: 'program' },
    { label: __('Гарантия', 'ecodom'), value: 'guarantee' },
];

export default function Edit({ attributes, setAttributes }) {
    const { heading, items, imageUrl } = attributes;

    const updateItem = (index, patch) =>
        setAttributes({ items: items.map((item, i) => (i === index ? { ...item, ...patch } : item)) });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Изображение справа', 'ecodom')}>
                    <ImageField
                        url={imageUrl}
                        onSelect={(m) => setAttributes({ imageId: m.id, imageUrl: m.url })}
                        onRemove={() => setAttributes({ imageId: undefined, imageUrl: '' })}
                    />
                </PanelBody>
                <PanelBody title={__('Пункты списка', 'ecodom')} initialOpen={false}>
                    {items.map((item, i) => (
                        <div key={i} style={{ marginBottom: 16 }}>
                            <TextControl label={__('Текст', 'ecodom')} value={item.text} onChange={(v) => updateItem(i, { text: v })} />
                            <SelectControl label={__('Иконка', 'ecodom')} value={item.icon} options={ICON_OPTIONS} onChange={(v) => updateItem(i, { icon: v })} />
                            <Button variant="link" isDestructive onClick={() => setAttributes({ items: items.filter((_, n) => n !== i) })}>
                                {__('Удалить пункт', 'ecodom')}
                            </Button>
                        </div>
                    ))}
                    <Button variant="secondary" onClick={() => setAttributes({ items: [...items, { icon: 'guarantee', text: '' }] })}>
                        {__('Добавить пункт', 'ecodom')}
                    </Button>
                </PanelBody>
            </InspectorControls>

            <section {...useBlockProps({ className: 'eco-light advantages' })}>
                <div className="eco-light__stage advantages__stage">
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <span className="eco-light__line" />
                    <RichText tagName="h2" className="advantages__heading" value={heading} onChange={(v) => setAttributes({ heading: v })} placeholder={__('Заголовок', 'ecodom')} allowedFormats={[]} />
                    <ul className="advantages__list">
                        {items.map((item, i) => (
                            <li key={i} className="advantages__item">
                                <span className="advantages__icon"><img src={ICONS[item.icon] || guarantee} alt="" /></span>
                                <span className="advantages__text">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                    <img className="advantages__image" src={imageUrl || defaultImage} alt="" />
                </div>
            </section>
        </>
    );
}
