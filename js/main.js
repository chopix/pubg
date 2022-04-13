
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


// language popup
const languageRu = document.querySelector('.header-language__ru');
const languageEng = document.querySelector('.header-language__eng');

languageEng.addEventListener('click', () => {
    console.log('aaaa');
});

languageRu.addEventListener('click', () => {
    console.log('a');
});



// oc buttons
const buttonIOS = document.querySelector('.oc-ios');
const buttonAndroid = document.querySelector('.oc-android');
const buttonWindows = document.querySelector('.oc-windows');
const funcButton = document.querySelectorAll('.func-oc__item');
const tarifButton = document.querySelectorAll('.tarifs-button');

for (let i = 0; i < funcButton.length; i++) {
    funcButton[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}
for (let i = 0; i < tarifButton.length; i++) {
    tarifButton[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active_tarif");
      current[0].className = current[0].className.replace(" active_tarif", "");
      this.className += " active_tarif";
    });
}




























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
// eventListener
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

