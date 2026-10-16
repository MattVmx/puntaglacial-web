(function () {
  var button = document.getElementById('burger_menu');
  var menu = document.getElementById('slideMenu');
  var icon = button.querySelector('i');
  var mobileViewport = window.matchMedia('(max-width: 800px)');

  function setOpen(open) {
    menu.classList.toggle('active', open);
    menu.inert = !open;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    icon.classList.toggle('fa-bars', !open);
    icon.classList.toggle('fa-times', open);
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      setOpen(false);
      button.focus();
    }
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });

  mobileViewport.addEventListener('change', function () {
    setOpen(false);
  });

  setOpen(false);
}());
