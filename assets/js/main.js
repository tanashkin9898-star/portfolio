(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mouse parallax on floating objects ---------- */
  function parallax() {
    if (reduce) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var objs = Array.prototype.slice.call(document.querySelectorAll('.obj'));
    if (!objs.length) return;
    var tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', function (e) {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;   // -1 .. 1
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    (function loop() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      for (var i = 0; i < objs.length; i++) {
        var d = parseFloat(objs[i].getAttribute('data-depth')) || 20;
        objs[i].style.transform = 'translate(' + (cx * d) + 'px,' + (cy * d) + 'px)';
      }
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Quiet live clock ---------- */
  function clock() {
    var el = document.getElementById('clock');
    if (!el) return;
    function update() {
      try {
        var t = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit', minute: '2-digit',
          timeZone: 'Europe/Berlin', hour12: false
        }).format(new Date());
        el.textContent = 'Wiesbaden, DE — ' + t;
      } catch (e) { /* keep default */ }
    }
    update();
    setInterval(update, 30000);
  }

  /* ---------- Fit gallery mockups inside their thumbnails ---------- */
  function fitGallery() {
    var mocks = document.querySelectorAll('.gthumb .mock');
    for (var i = 0; i < mocks.length; i++) {
      var m = mocks[i];
      var c = m.firstElementChild; // the mockup content (phone / dash / cons / calm)
      if (!c) continue;
      c.style.transform = 'none';
      var padX = 36, padY = 30;
      var aw = m.clientWidth - padX * 2, ah = m.clientHeight - padY * 2;
      var cw = c.offsetWidth, ch = c.offsetHeight;
      if (!cw || !ch) continue;
      var s = Math.min(aw / cw, ah / ch);
      s = Math.min(s, 1.1); // allow a touch of upscale for small content
      c.style.transform = 'scale(' + s.toFixed(3) + ')';
    }
  }

  /* ---------- Koala badge: tap to reveal on touch devices (hover handles desktop) ---------- */
  function koalaTap() {
    var badge = document.querySelector('.badge-swap');
    if (!badge) return;
    var timer;
    badge.addEventListener('click', function () {
      badge.classList.add('is-koala');
      clearTimeout(timer);
      timer = setTimeout(function () { badge.classList.remove('is-koala'); }, 1800);
    });
  }

  var fitTimer;
  function scheduleFit() { clearTimeout(fitTimer); fitTimer = setTimeout(fitGallery, 60); }

  document.addEventListener('DOMContentLoaded', function () {
    parallax();
    clock();
    koalaTap();
    fitGallery();
    window.addEventListener('load', fitGallery);
    window.addEventListener('resize', scheduleFit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitGallery);
    setTimeout(fitGallery, 500);
  });
})();
