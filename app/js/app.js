const navLink = document.querySelector('.nav-link-explore');
const navUl = document.querySelector('.explore-ul');
const langLink = document.querySelector('.lang-link');
const langUl = document.querySelector('.language-ul');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

navLink.addEventListener('click', () => {
    navUl.classList.toggle('open');
    navLink.classList.toggle('open');
})

langLink.addEventListener('click', () => {
    langUl.classList.toggle('open');
    langLink.classList.toggle('open');
    console.log("hi")
})

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
})

