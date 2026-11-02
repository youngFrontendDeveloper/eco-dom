import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/** Общий компонент выбора картинки из медиатеки. */
export default function ImageField({ url, onSelect, onRemove }) {
    return (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={onSelect}
                allowedTypes={['image']}
                render={({ open }) => (
                    <>
                        {url && <img src={url} alt="" style={{ maxWidth: '100%', marginBottom: 8 }} />}
                        <Button variant="secondary" onClick={open}>
                            {url ? __('Заменить', 'ecodom') : __('Выбрать картинку', 'ecodom')}
                        </Button>
                        {url && (
                            <Button variant="link" isDestructive onClick={onRemove} style={{ marginLeft: 8 }}>
                                {__('Убрать', 'ecodom')}
                            </Button>
                        )}
                    </>
                )}
            />
        </MediaUploadCheck>
    );
}
