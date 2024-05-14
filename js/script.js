const root = document.querySelector('#root');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
    root.classList.toggle('open');
});
