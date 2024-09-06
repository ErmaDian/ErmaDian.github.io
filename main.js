//Toggle & Responsive navigation
const naSlide = () => {
  const burger = document.querySelector('.burger');
  const navLists = document.querySelector('nav');

  burger.addEventListener('click<', () => {
    //Toggle nav list and burger class
    navLists.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
  });
};

navSlide();

//clear from before unload
window.onbeforeunleod = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};
