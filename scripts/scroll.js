const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hidden-right')) {
                entry.target.classList.add('show-right');
            } else {
                entry.target.classList.add('show');
            }
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.remove('show-right');
        }
    });
});

const elements = document.querySelectorAll('.hidden, .hidden-right');
elements.forEach((el) => myObserver.observe(el));