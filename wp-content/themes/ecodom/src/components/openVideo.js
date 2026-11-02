// Общий для блоков показ видео в модальном окне <dialog> (mp4, YouTube, Vimeo).
const embedUrl = (url) => {
    const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
    if (yt) {
        return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`;
    }
    const vimeo = url.match(/vimeo\.com\/(\d+)/);
    return vimeo ? `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` : null;
};

export default function openVideo(url) {
    const dialog = document.createElement('dialog');
    dialog.className = 'video-dialog';

    const embed = embedUrl(url);
    const media = document.createElement(embed ? 'iframe' : 'video');
    if (embed) {
        media.src = embed;
        media.allow = 'autoplay; fullscreen';
        media.allowFullscreen = true;
    } else {
        media.src = url;
        media.controls = true;
        media.autoplay = true;
    }

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'video-dialog__close';
    close.setAttribute('aria-label', 'Закрыть');
    close.textContent = '×';

    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => dialog.remove());
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });

    dialog.append(close, media);
    document.body.append(dialog);
    dialog.showModal();
}
