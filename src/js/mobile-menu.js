(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuBtn1: document.querySelector('[data-menu-close-home]'),
    closeMenuBtn2: document.querySelector('[data-menu-close-about]'),
    closeMenuBtn3: document.querySelector('[data-menu-close-products]'),
    closeMenuBtn4: document.querySelector('[data-menu-close-contacts]'),

    menu: document.querySelector('[data-menu]'),
    bodyNoScroll: document.querySelector("[data-no-scroll]") 
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn1.addEventListener('click', toggleModal);
  refs.closeMenuBtn2.addEventListener('click', toggleModal);
  refs.closeMenuBtn3.addEventListener('click', toggleModal);
  refs.closeMenuBtn4.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.bodyNoScroll.classList.toggle('no-scroll');
  }
})();
