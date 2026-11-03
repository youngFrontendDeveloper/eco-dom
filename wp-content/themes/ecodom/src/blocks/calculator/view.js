// Калькулятор: один шаг на экране, кнопка «Далее» активна после выбора, финальная форма уходит через admin-ajax.
const THANKS_MS = 8000; // сколько показывать «Спасибо» перед возвратом к форме
const pad = (n) => String(n).padStart(2, '0');

document.querySelectorAll('.calc__panel').forEach((form) => {
    const total = Number(form.dataset.total);
    const steps = [...form.querySelectorAll('.calc__step')];
    const quiz = steps.filter((s) => /^\d+$/.test(s.dataset.step));
    const final = form.querySelector('[data-step="final"]');
    const done = form.querySelector('[data-step="done"]');
    const next = form.querySelector('.calc__next');
    const back = form.querySelector('.calc__back');
    const bar = form.querySelector('.calc__bar');
    const fill = form.querySelector('.calc__progress-fill');
    const current = form.querySelector('.calc__current');
    const errorBox = form.querySelector('.calc__error');
    const submit = form.querySelector('.calc__submit');

    let index = 0; // 0..total-1 — шаги квиза, total — форма заявки

    const hasAnswer = (step) => !!step.querySelector('.calc__input:checked');

    const show = (i) => {
        index = i;
        const isForm = i >= total;
        steps.forEach((s) => {
            s.hidden = true;
        });
        (isForm ? final : quiz[i]).hidden = false;

        const shown = Math.min(i + 1, total);
        current.textContent = pad(shown);
        fill.style.width = `${(shown / total) * 100}%`;
        back.hidden = i === 0;
        next.hidden = isForm;
        next.disabled = !isForm && !hasAnswer(quiz[i]);
    };

    form.addEventListener('change', (e) => {
        if (e.target.matches('.calc__step[data-step] .calc__input') && index < total) {
            next.disabled = !hasAnswer(quiz[index]);
        }
    });

    next.addEventListener('click', () => {
        if (index < total && hasAnswer(quiz[index])) {
            show(index + 1);
            form.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    });
    back.addEventListener('click', () => show(Math.max(0, index - 1)));

    // после «Спасибо за заявку» возвращаем квиз к началу с чистой формой
    const restart = () => {
        form.reset();
        done.hidden = true;
        bar.hidden = false;
        submit.disabled = false;
        show(0);
    };

    const fail = (message) => {
        errorBox.textContent = message;
        errorBox.hidden = false;
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorBox.hidden = true;

        const name = form.elements.name.value.trim();
        const phone = form.elements.phone.value.trim();
        if (!name) {
            fail('Укажите имя.');
            form.elements.name.focus();
            return;
        }
        if (phone.replace(/\D/g, '').length < 10) {
            fail('Укажите телефон полностью, например +7 900 000-00-00.');
            form.elements.phone.focus();
            return;
        }
        if (!form.elements.consent.checked) {
            fail('Подтвердите согласие на обработку персональных данных.');
            form.elements.consent.focus();
            return;
        }

        const data = new FormData(form);
        data.append('action', 'ecodom_lead');
        data.append('nonce', form.dataset.nonce);
        submit.disabled = true;

        try {
            const response = await fetch(form.dataset.ajax, { method: 'POST', body: data });
            const json = await response.json();
            if (!json.success) {
                fail(json.data?.message || 'Не удалось отправить заявку. Попробуйте ещё раз.');
                submit.disabled = false;
                return;
            }
            steps.forEach((s) => {
                s.hidden = true;
            });
            done.querySelector('.calc__done-text').textContent = json.data.message;
            done.hidden = false;
            bar.hidden = true;
            setTimeout(restart, THANKS_MS);
        } catch (err) {
            fail('Нет связи с сервером. Проверьте интернет и попробуйте ещё раз.');
            submit.disabled = false;
        }
    });

    show(0);
});
