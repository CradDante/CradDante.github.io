const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menuButton.focus();
  }
});

const dialog = document.querySelector('.art-dialog');
const dialogImage = dialog.querySelector('.dialog-image');
document.querySelectorAll('.image-open').forEach(button => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.title;
    document.querySelector('#dialog-title').textContent = button.dataset.title;
    document.querySelector('#dialog-description').textContent = button.dataset.description;
    const download = dialog.querySelector('.download-link');
    download.href = button.dataset.image;
    download.download = button.dataset.image.split('/').pop();
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
