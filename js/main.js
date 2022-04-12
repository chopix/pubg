const linkMain = document.querySelector('.link_main');
const main = document.querySelector('.hero');
const linkTarifs = document.querySelector('.link_tarif');
const tarifs = document.querySelector('.tarifs');
const linkReviews = document.querySelector('.link_reviews');
const talk = document.querySelector('.talk');
const linkFAQ = document.querySelector('.link_faq');
const questions = document.querySelector('.questions');
const linkContacts = document.querySelector('.link_contacts');
const contacts = document.querySelector('.footer');
const linkFunc = document.querySelector('.link_func');
const func = document.querySelector('.func');


// FOOTER
const linkFootMain = document.querySelector('.foot_link_main');
const linkFootTarifs = document.querySelector('.foot_link_tarif');
const linkFootReviews = document.querySelector('.foot_link_reviews');
const linkFootFAQ = document.querySelector('.foot_link_faq');
const linkFootContacts = document.querySelector('.foot_link_contacts');
const linkFootFunc = document.querySelector('.foot_link_func');


function scrollDownTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    });
};
function scrollUpTo(element) {
    element.scrollIntoView({behavior: "smooth"});

};

linkTarifs.addEventListener('click', () => {
    scrollDownTo(tarifs);
});
linkMain.addEventListener('click', () => {
    scrollDownTo(main);
});
linkReviews.addEventListener('click', () => {
    scrollDownTo(talk);
});
linkFAQ.addEventListener('click', () => {
    scrollDownTo(questions);
});
linkContacts.addEventListener('click', () => {
    scrollDownTo(contacts);
});
linkFunc.addEventListener('click', () => {
    scrollDownTo(func);
});
linkFootMain.addEventListener('click', () => {
    scrollUpTo(main);
});
linkFootTarifs.addEventListener('click', ()=> {
    console.log('vse norm')
    scrollUpTo(tarifs);
});
linkFootReviews.addEventListener('click', ()=> {
    console.log('vse norm')
    scrollUpTo(talk);
});
linkFootFAQ.addEventListener('click', ()=> {
    console.log('vse norm')
    scrollUpTo(questions);
});
linkFootContacts.addEventListener('click', ()=> {
    console.log('vse norm')
    scrollUpTo(contacts);
});
linkFootFunc.addEventListener('click', ()=> {
    console.log('vse norm')
    scrollUpTo(func);
});

