document.addEventListener("DOMContentLoaded", function() {
    /// navigation
    let clicked = false;
    const button = document.getElementById("menuOpener");
    const menu = document.getElementById("navigation");
    const mainText = document.getElementsByClassName('main-text')[0];
    button.onclick = function() {
        if(!clicked) {
            clicked = true;
            this.classList.remove('fa-bars');
            this.classList.add('fa-times');
            menu.classList.add('opened');
            mainText.classList.add('hidden');
        }else {
            clicked = false;
            this.classList.add('fa-bars');
            this.classList.remove('fa-times');
            menu.classList.remove('opened');
            mainText.classList.remove('hidden');
        }
    }

    ///slider
    const next = document.getElementById('sliderNext');
    const previous = document.getElementById('sliderPrevious');
    const pictures = document.getElementsByClassName('vykres');
    let actualPicture = 0;

    next.onclick = function() {
        if(actualPicture === pictures.length -1){
            pictures[actualPicture].classList.add('hidden');
            actualPicture = 0;
            pictures[actualPicture].classList.remove('hidden');
        }else {
            pictures[actualPicture++].classList.add('hidden');
            pictures[actualPicture].classList.remove('hidden');
        }
      
    }

    previous.onclick = function() {
        if(actualPicture === 0){
            pictures[actualPicture].classList.add('hidden');
            actualPicture = pictures.length -1;
            pictures[actualPicture].classList.remove('hidden');
        }else {
            pictures[actualPicture--].classList.add('hidden');
            pictures[actualPicture].classList.remove('hidden');
        }
      
    }





 });