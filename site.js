
/* ========================================
   MOBILE NAVIGATION
======================================== */

document.querySelector('.mobile-toggle')?.addEventListener('click', () => {

    let n = document.querySelector('.links');

    const is = n.classList.toggle('show');

    document
        .querySelector('.mobile-toggle')
        .setAttribute('aria-expanded', String(is));

});


/* ========================================
   PROJECT FILTERS
======================================== */

document.querySelectorAll('[data-filter]').forEach(b => {

    b.addEventListener('click', () => {

        document.querySelectorAll('[data-filter]').forEach(x => {
            x.classList.remove('active');
        });

        b.classList.add('active');

        document.querySelectorAll('[data-group]').forEach(c => {

            c.hidden =
                b.dataset.filter !== 'All' &&
                c.dataset.group !== b.dataset.filter;

        });

    });

});


/* ========================================
   PROJECT IMAGE MODAL
======================================== */

let modal = document.querySelector('.modal');

document.querySelectorAll('[data-zoom]').forEach(i => {

    i.addEventListener('click', () => {

        modal.querySelector('img').src = i.src;

        modal.querySelector('img').alt = i.alt;

        modal.classList.add('open');

        modal.querySelector('button').focus();

    });

});


/* ========================================
   CLOSE IMAGE MODAL — BUTTON
======================================== */

document.querySelector('.modal button')?.addEventListener('click', () => {

    modal.classList.remove('open');

});


/* ========================================
   CLOSE IMAGE MODAL — CLICK OUTSIDE
======================================== */

modal?.addEventListener('click', e => {

    if (e.target === modal) {

        modal.classList.remove('open');

    }

});


/* ========================================
   CLOSE IMAGE MODAL — ESCAPE KEY
======================================== */

document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {

        modal?.classList.remove('open');

    }

});


/* ========================================
   PROJECT IMAGE FALLBACK
======================================== */

document.querySelectorAll('img[data-fallback]').forEach(i => {

    i.addEventListener('error', () => {

        i.parentElement.innerHTML =
            '<span class="noimg">Project image available in the original GitHub repository</span>';

    });

});

/* ========================================
   MOBILE NAVIGATION
======================================== */

document.querySelector('.mobile-toggle')?.addEventListener('click', () => {

    let n = document.querySelector('.links');

    const is = n.classList.toggle('show');

    document
        .querySelector('.mobile-toggle')
        .setAttribute('aria-expanded', String(is));

});


/* ========================================
   PROJECT FILTERS
======================================== */

document.querySelectorAll('[data-filter]').forEach(b => {

    b.addEventListener('click', () => {

        document.querySelectorAll('[data-filter]').forEach(x => {
            x.classList.remove('active');
        });

        b.classList.add('active');

        document.querySelectorAll('[data-group]').forEach(c => {

            c.hidden =
                b.dataset.filter !== 'All' &&
                c.dataset.group !== b.dataset.filter;

        });

    });

});


/* ========================================
   PROJECT IMAGE MODAL
======================================== */

let modal = document.querySelector('.modal');

document.querySelectorAll('[data-zoom]').forEach(i => {

    i.addEventListener('click', () => {

        modal.querySelector('img').src = i.src;

        modal.querySelector('img').alt = i.alt;

        modal.classList.add('open');

        modal.querySelector('button').focus();

    });

});


/* ========================================
   CLOSE IMAGE MODAL — BUTTON
======================================== */

document.querySelector('.modal button')?.addEventListener('click', () => {

    modal.classList.remove('open');

});


/* ========================================
   CLOSE IMAGE MODAL — CLICK OUTSIDE
======================================== */

modal?.addEventListener('click', e => {

    if (e.target === modal) {

        modal.classList.remove('open');

    }

});


/* ========================================
   CLOSE IMAGE MODAL — ESCAPE KEY
======================================== */

document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {

        modal?.classList.remove('open');

    }

});


/* ========================================
   PROJECT IMAGE FALLBACK
======================================== */

document.querySelectorAll('img[data-fallback]').forEach(i => {

    i.addEventListener('error', () => {

        i.parentElement.innerHTML =
            '<span class="noimg">Project coming soon</span>';

    });

});
