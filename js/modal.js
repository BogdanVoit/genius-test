const modal = document.querySelector('.backdrop');
const modalBthOpen = document.querySelector('.modal-bth-open');
const modalBthClose = document.querySelector('.modal-bth-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBthOpen.addEventListener('click',toggleModal);
modalBthClose.addEventListener('click',toggleModal);
