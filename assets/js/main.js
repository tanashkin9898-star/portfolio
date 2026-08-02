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

  /* ---------- Badge: verified check morphs to the Canadian maple leaf on hover/tap ---------- */
  function badgeSwap() {
    var badge = document.querySelector('.badge-swap');
    if (!badge) return;
    var timer;
    function show(ms) {
      badge.classList.add('is-alt');
      clearTimeout(timer);
      timer = setTimeout(function () { badge.classList.remove('is-alt'); }, ms);
    }
    badge.addEventListener('click', function () { show(1800); });
  }

  /* ---------- Headline: line-by-line mask reveal ---------- */
  function revealLines() {
    var h = document.querySelector('.intro__title.reveal-lines');
    if (!h) return;
    var full = (h.textContent || '').replace(/\s+/g, ' ').trim();
    if (!full) return;

    function build() {
      // measure natural line breaks with temporary inline-block words
      var words = full.split(' ');
      h.textContent = '';
      var els = words.map(function (w) {
        var s = document.createElement('span');
        s.style.display = 'inline-block';
        s.textContent = w;
        h.appendChild(s);
        h.appendChild(document.createTextNode(' '));
        return s;
      });
      var lines = [], cur = [], top = null;
      els.forEach(function (el) {
        var t = el.offsetTop;
        if (top === null || Math.abs(t - top) > 3) { if (cur.length) lines.push(cur); cur = []; top = t; }
        cur.push(el.firstChild.nodeValue);
      });
      if (cur.length) lines.push(cur);

      // rebuild as masked lines
      h.textContent = '';
      lines.forEach(function (lw, i) {
        var ln = document.createElement('span'); ln.className = 'ln';
        var inr = document.createElement('span'); inr.className = 'ln-in';
        inr.textContent = lw.join(' ');
        inr.style.transitionDelay = (0.06 + i * 0.11) + 's';
        ln.appendChild(inr);
        h.appendChild(ln);
      });
      h.classList.add('built');
    }

    if (reduce) { h.textContent = full; h.classList.add('built'); return; }

    try {
      build();
      requestAnimationFrame(function () { requestAnimationFrame(function () { h.classList.add('is-in'); }); });
    } catch (e) {
      h.textContent = full; h.classList.add('built', 'is-in');
    }

    // safety net: never leave the headline hidden
    setTimeout(function () { h.classList.add('built', 'is-in'); }, 1600);

    // re-line on resize (settle instantly, no re-animation)
    var rz;
    window.addEventListener('resize', function () {
      clearTimeout(rz);
      rz = setTimeout(function () {
        h.classList.remove('is-in');
        try { build(); } catch (e) { h.textContent = full; h.classList.add('built'); }
        h.classList.add('is-in');
      }, 180);
    });
  }

  /* ---------- Cursor spotlight: soft glow follows the pointer ---------- */
  function spotlight() {
    if (reduce) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var el = document.createElement('div');
    el.className = 'spotlight';
    document.body.appendChild(el);
    var root = document.documentElement, raf = 0, x = 0, y = 0;
    window.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
      if (!el.classList.contains('on')) el.classList.add('on');
      if (raf) return;
      raf = requestAnimationFrame(function () {
        root.style.setProperty('--mx', x + 'px');
        root.style.setProperty('--my', y + 'px');
        raf = 0;
      });
    });
  }

  var fitTimer;
  function scheduleFit() { clearTimeout(fitTimer); fitTimer = setTimeout(fitGallery, 60); }

  document.addEventListener('DOMContentLoaded', function () {
    parallax();
    clock();
    badgeSwap();
    spotlight();
    if (document.fonts && document.fonts.ready) {
      var revealed = false, go = function () { if (!revealed) { revealed = true; revealLines(); } };
      document.fonts.ready.then(go);
      setTimeout(go, 350);
    } else {
      revealLines();
    }
    fitGallery();
    window.addEventListener('load', fitGallery);
    window.addEventListener('resize', scheduleFit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitGallery);
    setTimeout(fitGallery, 500);
  });
})();
