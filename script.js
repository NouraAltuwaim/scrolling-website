let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let NA = document.querySelector('.NA');

window.addEventListener('scroll', function() {
  let value = window.scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 4 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value * 5 + 'px';
  NA.style.fontSize = value + 'px';
  
  if (scrollY >= 67) {
    NA.style.fontSize = 67 + 'px';
    NA.style.position =  'fixed';
    if (this.scrollY >= 477){
        NA.style.display =  'none';
    }else{
        NA.style.display =  'block'; 
    }
    if (this.scrollY >=170){
        this.document.querySelector('.main').style.background = 'linear-gradient(#376281 , #cea4f4)'
    }else{
        this.document.querySelector('.main').style.background = 'linear-gradient (#5881db , #cea4f4)' 
    }
  }
});
