/* CGEC v2 - cgec.ca - Main JS */
(function () {
  'use strict';

  /* --- Mobile nav ----------------------------------------- */
  var hamburger = document.querySelector('.hbg');
  var nav = document.getElementById('mnav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* --- Accordion ------------------------------------------ */
  document.querySelectorAll('.accordion-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.accordion-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.accordion-btn').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* --- Active nav link ------------------------------------ */
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('#mnav a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
  });

})();
