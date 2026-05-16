const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15 
});

const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
hiddenElements.forEach((el) => observer.observe(el));