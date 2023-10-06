  
  
 

    const navEl=document.querySelector('.navColor');
    window.addEventListener('scroll', ()=>{
        // console.log('klfdjlkadhsfjash')
    if(window.scrollY>=100){
    navEl.classList.add('navbar-scrolled');
         }
         else{
             navEl.classList.remove('navbar-scrolled');
         }
    });

  var gotop = document.getElementById('btnUp');
        var checkpoint = 400;
        var prevpos = 0;
        function positionSetting(event) {

            var curpos = window.scrollY;

            if (curpos > prevpos && curpos > checkpoint) {
                //douwn
                gotop.classList.remove('d-none');
                gotop.onclick=()=>prevpos;
                //gotop.classList.add('d-block');
            }
            else if (curpos < prevpos && curpos < checkpoint) {
                // up
                gotop.classList.add('d-none');
            }

            prevpos = curpos;
            console.log(prevpos);

        }
  // let backtotop = select('.back-to-top')
  // if (backtotop) {
  //   const toggleBacktotop = () => {
  //     if (window.scrollY > 100) {
  //       backtotop.classList.add('active')
  //     } else {
  //       backtotop.classList.remove('active')
  //     }
  //   }
  //   window.addEventListener('load', toggleBacktotop)
  //   onscroll(document, toggleBacktotop)
  // }
        window.addEventListener('scroll', positionSetting);
       
/////Loop
function repeatCard() {
let rowForCardLoop = document.getElementById("rowForCardLoop");
let cardLoop = document.getElementById("cardLoop");
let array = [];
for (let i = 0; i <= 4; i++) {
let newCard = cardLoop.cloneNode(true);
cardLoop.after(newCard);
array.push(newCard);
}
}
repeatCard()
console.log(cardLoop);
console.log(rowForCardLoop);
//////Loopin Slide
function repeatSlid() {
let ulForCardLoop = document.getElementById("ulForCardLoop");
let liLoop = document.getElementById("liLoop");
let array = [];
for (let i = 0; i <= 20; i++) {
let newCard = liLoop.cloneNode(true);
liLoop.after(newCard);
array.push(newCard);
}
}
repeatSlid()
console.log(cardLoop);
console.log(rowForCardLoop);
//////Loopin Slide
function repeatSlid1() {
let ulForCardLoop1 = document.getElementById("ulForCardLoop1");
let liLoop1 = document.getElementById("liLoop1");
let array = [];
for (let i = 0; i <= 20; i++) {
let newCard = liLoop1.cloneNode(true);
liLoop1.after(newCard);
array.push(newCard);
}
}
repeatSlid1()
console.log(cardLoop);
console.log(rowForCardLoop);


// /////Animation 


// ScrollReveal().reveal('.container-fluid', { delay: 50 });

//  window.addEventListener('scroll', ()=>{
//         // console.log('klfdjlkadhsfjash')
//     if(window.scrollY>=80){
//     navEl.classList.add('navbar-scrolled');
//          }
//          else{
//              navEl.classList.remove('navbar-scrolled');
//          }
//     });

    ///navigation Link
    // let linkElm=document.querySelector(".linkunderline2");
    //  window.addEventListener('scroll', ()=>{
    // if(window.scrollY>=432.96002197265625){
         
    
    //     linkElm.setAttribute("style", "background-color: #dc3545; border-radius: 22px;");
    //      }else{
    //     document.querySelector(".linkunderline1").setAttribute("style", "background-color: #dc3545; border-radius: 22px;");
    //      }
       
    // });
      


///////////Teame Slide
class WeeSlider extends HTMLElement {
  constructor() {
    super();
    this.loopSlides = this.dataset.loop === 'true';
    this.slides = [...this.querySelectorAll('.wee-slider__slide')];
    this.navDots = [...this.querySelectorAll('.wee-slider__navdot')];
    this.buttons = [...this.querySelectorAll('.wee-slider__buttons button')];
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.buttons.forEach(button => button.addEventListener('click', this.handleButtonClick));
    this.navDots.forEach((navDot, index) => navDot.addEventListener('click', () => {
      this.handleSlideChange(index);
    }));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        const slideIndex = this.slides.indexOf(target);
        target.classList.toggle('visible', isIntersecting);
        this.navDots[slideIndex].classList.toggle('visible', isIntersecting);
        if (!this.loopSlides) this.handleSlideButtonActive();
      });
    }, { threshold: 0.9 });
    this.slides.forEach(slide => observer.observe(slide));
    this.classList.add('loaded');
  }

  handleButtonClick(event) {
    const { classList } = event.currentTarget;
    const isNext = classList.contains('wee-slider__button-next');
    const modifier = isNext ? 1 : -1;
    const condition = slide => slide.classList.contains('visible');
    let index = isNext ? this.slides.findLastIndex(condition) : this.slides.findIndex(condition);
    index = index !== -1 ? index + modifier : (isNext ? 0 : this.slides.length - 1);
    if (this.loopSlides) index = (index + this.slides.length) % this.slides.length;
    this.handleSlideChange(index);
  }

  handleSlideChange(index) {
    this.slides.forEach((slide, i) => {
      if (i === index) slide.scrollIntoView();
    });
    this.navDots.forEach((navDot, i) => {
      navDot.classList.toggle('active', i === index);
    });
  }

  handleSlideButtonActive() {
    this.buttons.forEach(button => {
      const isNext = button.classList.contains('wee-slider__button-next');
      const slide = isNext ? this.slides[this.slides.length - 1] : this.slides[0]
      button.disabled = slide.classList.contains('visible');
    });
  }
}

customElements.define('wee-slider', WeeSlider);

//////////////////////////customer Slide
/**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  