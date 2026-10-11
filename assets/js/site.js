// 相簿燈箱：點照片放大、左右切換、Esc 關閉
(function () {
  var gal = document.querySelector('[data-gallery]');
  if (!gal) return;
  var links = Array.prototype.slice.call(gal.querySelectorAll('.gallery-item'));
  if (!links.length) return;
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lb-close" aria-label="關閉">×</button><button class="lb-prev" aria-label="上一張">‹</button><img alt=""><button class="lb-next" aria-label="下一張">›</button><div class="lb-count"></div>';
  document.body.appendChild(lb);
  var img = lb.querySelector('img'), count = lb.querySelector('.lb-count'), cur = 0;
  function show(i) {
    cur = (i + links.length) % links.length;
    img.src = links[cur].href;
    count.textContent = (cur + 1) + ' / ' + links.length;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }
  links.forEach(function (a, i) { a.addEventListener('click', function (e) { e.preventDefault(); show(i); }); });
  lb.querySelector('.lb-close').onclick = close;
  lb.querySelector('.lb-prev').onclick = function (e) { e.stopPropagation(); show(cur - 1); };
  lb.querySelector('.lb-next').onclick = function (e) { e.stopPropagation(); show(cur + 1); };
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target === img) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
  var sx = 0;
  lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (dx > 50) show(cur - 1); if (dx < -50) show(cur + 1); });
})();
