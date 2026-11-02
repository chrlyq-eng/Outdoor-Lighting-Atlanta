document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('site-nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        nav.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                nav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    document.querySelectorAll('[data-form]').forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = form.querySelector('[name="name"]')?.value?.trim();
            const email = form.querySelector('[name="email"]')?.value?.trim();
            const message = form.querySelector('[name="message"]')?.value?.trim();

            if (!name || !email || !message) {
                alert('Please complete your name, email, and project details.');
                return;
            }

            const status = form.querySelector('.form-success');
            if (status) {
                status.style.display = 'block';
            }

            form.reset();
            console.log('Outdoor lighting quote request captured:', { name, email, message });
        });
    });
});
