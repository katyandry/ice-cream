(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product-ingredients-open]'),
    closeModalBtn: document.querySelector('[data-modal-product-ingredients-close]'),
    modal: document.querySelector('[data-modal-product-ingredients]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();