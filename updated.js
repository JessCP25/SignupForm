const showEmail = () => {
  const emailContainer = document.getElementById('span');
  const email = localStorage.getItem('email');
  emailContainer.textContent = email;
}
window.addEventListener('load', () => showEmail());

const closed = document.getElementById('closed');

closed.addEventListener('click', () => {
    window.location.href = './index.html';
    localStorage.removeItem('email');
})