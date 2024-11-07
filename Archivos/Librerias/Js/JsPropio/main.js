window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
} 

function animateCounter(id, start, end, duration) {
  const element = document.getElementById(id);
  let startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const current = Math.min(end, Math.floor(progress / duration * (end - start) + start));
    element.textContent = current;
    if (current < end) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// document.addEventListener('DOMContentLoaded', () => {
//   animateCounter('counter1', 0, 100, 5000); // Ajusta los valores según necesites
//   animateCounter('counter2', 0, 50, 6000);  // Ajusta los valores según necesites
//   animateCounter('counter3', 0, 75, 7000);  // Ajusta los valores según necesites
// });

/**
   * Clientes Slider
   */
// new Swiper('.clientes-slider', {
//   speed: 400,
//   loop: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false
//   },
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 40
//     },
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 60
//     },
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 80
//     },
//     992: {
//       slidesPerView: 6,
//       spaceBetween: 120
//     }
//   }
// });

document.addEventListener("scroll", function() {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("#navbar .nav-link");

  sections.forEach(function(section) {
      var top = window.scrollY;
      var offset = section.offsetTop - 150; // Ajusta el valor según la altura del navbar
      var height = section.offsetHeight;
      var id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
          navLinks.forEach(function(link) {
              link.classList.remove("active");
              if (link.getAttribute("href").includes(id)) {
                  link.classList.add("active");
              }
          });
      }
  });
});
