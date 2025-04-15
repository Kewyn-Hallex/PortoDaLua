const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('hidden-right')) {
          entry.target.classList.add('show-right');
        } else if (entry.target.classList.contains('hidden-up')) {
          entry.target.classList.add('show-up');
        } else {
          entry.target.classList.add('show');
        }
      } else {
        entry.target.classList.remove('show');
        entry.target.classList.remove('show-right');
        entry.target.classList.remove('show-up');
      }
    });
  });
  
  const elements = document.querySelectorAll('.hidden, .hidden-right, .hidden-up');
  elements.forEach((el) => myObserver.observe(el));