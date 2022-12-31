// const menuLinks = document.querySelectorAll('.menu__list-link[data-goto]');
// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   });
//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth"
//       });
//       e.preventDefault();
//     }
//   }
// }

//JS scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })


  })
}

//burger
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');

burger?.addEventListener('click', () => {
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

// document.querySelectorAll('a[href*="#"]').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault()


//     const href = this.getAttribute('href').substring(1)
//     const scrollTarget = document.getElementById(href)

//     // const topOffset = document.querySelector('erg').offsetHeight
//     const topOffset = 0
//     const elementPosition = scrollTarget.getBoundingClientRect().top
//     const offsetPosition = elementPosition - topOffset
//     window.scrollBy({
//       top: offsetPosition,
//       behavior: 'smooth'
//     })
//   })
// })