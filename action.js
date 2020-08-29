!(function(d) {
  let itemClassName = "carousel_photo";
  let items = d.getElementsByClassName(itemClassName);
  const totalSlides = items.length;
  let slide = 0;
  let moving = true;

  function setInitialClasses() {
    items[totalSlides - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }

  function setEventListeners() {
    let next = d.getElementsByClassName("carousel_button-next")[0];
    let prev = d.getElementsByClassName("carousel_button-prev")[0];

    next.addEventListener("click", moveNext)
    prev.addEventListener("click", movePrev)
  }

  function moveNext() {
    if (!moving) {
      if (slide === totalSlides -1) {
        slide = 0;
      } else {
        slide++;
      }

      moveCarouselTo(slide);
    }
  }

  function movePrev() {
    if(!moving) {
      if(slide === 0) {
        slide = totalSlides -1;
      } else {
        slide--;
      }

      moveCarouselTo(slide);
    }
  }

  function disableInteraction() {
    moving = true;
    setTimeout(() => {
      moving = false;
    }, 500)
  }

  function moveCarouselTo(slide) {
    if (!moving) {
      disableInteraction();
      
      let newPrevios = slide -1;
      let newNext = slide + 1;
      let oldPrevious = slide -2;
      let oldNext = slide +2

      if ((totalSlides -1) >= 3) {
        if (newPrevios <= 0) {
          oldPrevious = totalSlides -1;
        } else if (newNext >= (totalSlides -1)) {
          oldNext = 0;
        }

        if (slide === 0) {
          newPrevios = totalSlides -1;
          oldPrevious = totalSlides -2;
          oldNext = slide +1;
        } else if (slide === totalSlides -1) {
          newPrevios = slide -1;
          newNext = 0;
          oldNext = 1;
        }

        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;

        items[newPrevios].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";

      }
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();
    moving = false;
  }

  initCarousel();


}(document))