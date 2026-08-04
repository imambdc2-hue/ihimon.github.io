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
window.addEventListener('load', function () {
  const counters = document.querySelectorAll('.counter');
  console.log('Counters found:', counters.length); // এটা কনসোলে সংখ্যা দেখাবে

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const increment = target / 80;

    function update() {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    }
    update();
  });
});
