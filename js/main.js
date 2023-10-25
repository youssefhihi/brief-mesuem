// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SLIDE FOR POTRIE DE SAFI~~~~~~~~~~~~~~~~~~~~~~
let slider = document.querySelector('.slider .list-img');
let img = document.querySelectorAll('.slider .list-img .images');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = img.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -img[active].offsetLeft + 'px';
  
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
//~~~~~~~~~~~~~~~~SOLIDER DE POTERIE DE SAFI
document.addEventListener('DOMContentLoaded', function() {
  let slider1 = document.querySelector('.slider1 .list-img1');
  let img1 = document.querySelectorAll('.slider1 .list-img1 .images1');
  let next1 = document.getElementById('next1');
  let prev1 = document.getElementById('prev1');
  let dots1 = document.querySelectorAll('.dots1 li');

  let lengthItems1 = img1.length - 1;
  let active1 = 0;

  next1.onclick = function() {
      active1 = active1 + 1 <= lengthItems1 ? active1 + 1 : 0;
      reloadSlider1();
  };

  prev1.onclick = function() {
      active1 = active1 - 1 >= 0 ? active1 - 1 : lengthItems1;
      reloadSlider1();
  };

  let refreshInterval1 = setInterval(() => { next1.click() }, 3000);

  function reloadSlider1() {
      slider1.style.left = -img1[active1].offsetLeft + 'px';

      let last_active_dot1 = document.querySelector('.dots1 li.active1');
      last_active_dot1.classList.remove('active1');
      dots1[active1].classList.add('active1');

      clearInterval(refreshInterval1);
      refreshInterval1 = setInterval(() => { next1.click() }, 3000);
  }

  dots1.forEach((li, key) => {
      li.addEventListener('click', () => {
          active1 = key;
          reloadSlider1();
      });
  });

  window.onresize = function(event) {
      reloadSlider1();
  };
});

































































