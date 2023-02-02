(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal_franchise-open]"),
      closeModalBtn: document.querySelector("[data-modal_franchise-close]"),
      modal: document.querySelector("[data-modal_franchise]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("overlay_franchise__is-hidden");
    }
  })();
  