(function () {
  const menuOpenBtn = document.querySelector('.menu-open-button');
  const menuCloseBtn = document.querySelector('.menu-close-button');
  const menuMobile = document.getElementById('modal-menu');
  const menuDesktop = document.querySelector('.desktop-menu');

  function atualizarLayout() {
    const larguraDaTela = window.innerWidth;

    if (larguraDaTela > 968) {
      menuDesktop.style.display = 'flex';
      menuOpenBtn.style.display = 'none';
      menuMobile.style.display = 'none';
    } else {
      menuDesktop.style.display = 'none';
      menuOpenBtn.style.display = 'block';
    }
  }

  atualizarLayout();

  window.addEventListener('resize', function () {
    atualizarLayout();
  });

  menuOpenBtn.addEventListener('click', function () {
    menuMobile.style.display = 'flex';
  });

  menuCloseBtn.addEventListener('click', function () {
    menuMobile.style.display = 'none';
  });
})();
