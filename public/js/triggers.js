function deleteUser(event, userName, userId) {
  event.preventDefault();

  let modal = document.getElementById('modal');

  modal.classList += ' active';

  document.getElementById('modal-userName').innerHTML = userName;

  document.getElementById('modalBtnSend').onclick = () => {
    document.getElementById('delete-'+ userId +'-form').submit();
  };
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}