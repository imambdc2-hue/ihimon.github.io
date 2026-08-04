/* ACTIVE NAV */

nav a.active{
    color:#ffffff;
    font-weight:700;
}

/* SCROLL REVEAL */

.about,
.goals,
.youtube,
.facebook,
.social,
.contact{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
}

.show{
    opacity:1 !important;
    transform:translateY(0) !important;
}
// Count-up animation on scroll
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const increment = target / 80;

    const update = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

const statsSection = document.querySelector('.follower-stats');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      animateCounters();
      hasAnimated = true;
    }
  });
}, { threshold: 0.4 });

if (statsSection) {
  observer.observe(statsSection);
}
