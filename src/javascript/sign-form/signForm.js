const signForm = document.getElementById('signForm');
const popupSuccess = document.getElementById('signSuccess');

function closeModal() {
  popupSuccess.close();
}

function openModal() {
  popupSuccess.showModal();

  const closeBtn = document.getElementById('closePopupSuccess');

  closeBtn.addEventListener('click', closeModal);
}

signForm.addEventListener('submit', (event) => {
  event.preventDefault();
  signForm.reset();
  openModal();
});