import openVideo from '../../components/openVideo';

document.querySelectorAll('.about__video[data-video]').forEach((btn) => {
    btn.addEventListener('click', () => openVideo(btn.dataset.video));
});

// Вкладки: клик и стрелки (↑/↓/←/→, Home, End).
document.querySelectorAll('.about').forEach((section) => {
    const tabs = [...section.querySelectorAll('[role="tab"]')];
    const panels = [...section.querySelectorAll('[role="tabpanel"]')];

    const select = (index, focus = false) => {
        tabs.forEach((tab, i) => {
            const on = i === index;
            tab.setAttribute('aria-selected', on);
            tab.tabIndex = on ? 0 : -1;
            tab.parentElement.classList.toggle('is-active', on);
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
                ArrowDown: i === last ? 0 : i + 1,
                ArrowRight: i === last ? 0 : i + 1,
                ArrowUp: i === 0 ? last : i - 1,
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
