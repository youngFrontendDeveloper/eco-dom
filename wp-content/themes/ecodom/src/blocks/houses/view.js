import openVideo from '../../components/openVideo';

document.querySelectorAll('.houses__video[data-video]').forEach((btn) => {
    btn.addEventListener('click', () => openVideo(btn.dataset.video));
});

// Вкладки: клик и стрелки (←/→, Home, End).
document.querySelectorAll('.houses').forEach((section) => {
    const tabs = [...section.querySelectorAll('[role="tab"]')];
    const panels = [...section.querySelectorAll('[role="tabpanel"]')];

    const select = (index, focus = false) => {
        tabs.forEach((tab, i) => {
            const on = i === index;
            tab.setAttribute('aria-selected', on);
            tab.classList.toggle('is-active', on);
            tab.tabIndex = on ? 0 : -1;
            panels[i].hidden = !on;
            if (on && focus) {
                tab.focus();
            }
        });
    };

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => select(i));
        tab.addEventListener('keydown', (e) => {
            const last = tabs.length - 1;
            const next = {
                ArrowRight: i === last ? 0 : i + 1,
                ArrowLeft: i === 0 ? last : i - 1,
                Home: 0,
                End: last,
            }[e.key];
            if (next !== undefined) {
                e.preventDefault();
                select(next, true);
            }
        });
    });
});
