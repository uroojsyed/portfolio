/* ==========================================================================
   SITE JAVASCRIPT
   Shared by every page on the site.

   CONTENTS
   01. Mobile navigation
   02. Project filters
   03. Project image modal
   04. Project image fallback
   ========================================================================== */


/* ==========================================================================
   01. MOBILE NAVIGATION
   Opens and closes the dropdown menu on small screens.
   ========================================================================== */

const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.links');

// Breakpoint where the full desktop navigation is restored.
// Keep in sync with the navigation media query in style.css.
const DESKTOP_NAV_MIN_WIDTH = 901;


/* ----------------------------------------
   Open / close helper
---------------------------------------- */

function setMenuOpen(isOpen) {

    if (!mobileToggle || !navLinks) {
        return;
    }

    navLinks.classList.toggle('show', isOpen);

    mobileToggle.setAttribute('aria-expanded', String(isOpen));

    // Swap the menu icon between hamburger and close.
    mobileToggle.textContent = isOpen ? '✕' : '☰';

}


/* ----------------------------------------
   Toggle button
---------------------------------------- */

mobileToggle?.addEventListener('click', () => {

    setMenuOpen(!navLinks.classList.contains('show'));

});


/* ----------------------------------------
   Close the menu when a link is tapped
---------------------------------------- */

navLinks?.addEventListener('click', e => {

    if (e.target.closest('a')) {
        setMenuOpen(false);
    }

});


/* ----------------------------------------
   Close the menu with the Escape key
---------------------------------------- */

document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {
        setMenuOpen(false);
    }

});


/* ----------------------------------------
   Reset the menu when resizing to desktop
---------------------------------------- */

window.addEventListener('resize', () => {

    if (window.innerWidth >= DESKTOP_NAV_MIN_WIDTH) {
        setMenuOpen(false);
    }

});


/* ==========================================================================
   02. PROJECT FILTERS
   Filters project cards by category on the work / coursework pages.
   ========================================================================== */

document.querySelectorAll('[data-filter]').forEach(button => {

    button.addEventListener('click', () => {

        // Update the active button.
        document.querySelectorAll('[data-filter]').forEach(other => {
            other.classList.remove('active');
        });

        button.classList.add('active');

        // Show or hide cards to match the selected filter.
        document.querySelectorAll('[data-group]').forEach(card => {

            card.hidden =
                button.dataset.filter !== 'All' &&
                card.dataset.group !== button.dataset.filter;

        });

    });

});


/* ==========================================================================
   03. PROJECT IMAGE MODAL
   Click an image to view it full screen.
   ========================================================================== */

const modal = document.querySelector('.modal');


/* ----------------------------------------
   Open the modal
---------------------------------------- */

document.querySelectorAll('[data-zoom]').forEach(image => {

    image.addEventListener('click', () => {

        modal.querySelector('img').src = image.src;

        modal.querySelector('img').alt = image.alt;

        modal.classList.add('open');

        modal.querySelector('button').focus();

    });

});


/* ----------------------------------------
   Close — button
---------------------------------------- */

document.querySelector('.modal button')?.addEventListener('click', () => {

    modal.classList.remove('open');

});


/* ----------------------------------------
   Close — click outside the image
---------------------------------------- */

modal?.addEventListener('click', e => {

    if (e.target === modal) {
        modal.classList.remove('open');
    }

});


/* ----------------------------------------
   Close — Escape key
---------------------------------------- */

document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {
        modal?.classList.remove('open');
    }

});


/* ==========================================================================
   04. PROJECT IMAGE FALLBACK
   Replaces a missing project image with a short message.
   ========================================================================== */

document.querySelectorAll('img[data-fallback]').forEach(image => {

    image.addEventListener('error', () => {

        image.parentElement.innerHTML =
            '<span class="noimg">Project coming soon</span>';

    });

});
