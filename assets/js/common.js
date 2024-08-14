const typeImg = {
  success: {
    img: './assets/img/tb_success.svg',
    color: '#2ecc71'
  },
  warning: {
    img: './assets/img/tb_warning.svg',
    color: '#f5b041'
  },
  info: {
    img: './assets/img/tb_info.svg',
    color: '#3498db'
  }
};

function showModal() {
  const modal = document.querySelector('.modal-container')
  modal.addEventListener('click', closeModal)

  modal.style.visibility = 'visible';
  modal.style.opacity = '1';
}

function closeModal() {
  const modal = document.querySelector('.modal-container')
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';

  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = '';
}
