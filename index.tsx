const hamburgerButton = document.querySelector(".hamburger-icon");
const hamburgerDeploy = document.querySelector(".hamburger-deploy");
const buttonArrowLeft = document.querySelector(".button-arrow-left");
const buttonArrowRight = document.querySelector(".button-arrow-right");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");

function hamburgerDeployFunction() {
  hamburgerDeploy?.classList.toggle("hidden");
}

let numberImage = 3;

function changeImageLeft() {
  if (numberImage > 0) {
    numberImage = numberImage - 1;
    number();
    console.log(numberImage);
    if (numberImage === 0) {
      numberImage = 5;
      number();
    }
  }
}

function changeImageRight() {
  if (numberImage <= 5) {
    numberImage = numberImage + 1;
    number();
    console.log(numberImage);
    if (numberImage === 6) {
      numberImage = 1;
      number();
    }
  }
}
function number() {
  if (numberImage == 5) {
    image2?.classList.add("hiddenImage2");
    image1?.classList.add("hiddenImage1");
    image5?.classList.remove("hiddenImage5");
    image3?.classList.add("hiddenImage3");
    image4?.classList.add("hiddenImage4");
  } else if (numberImage == 4) {
    image2?.classList.add("hiddenImage2");
    image1?.classList.add("hiddenImage1");
    image5?.classList.add("hiddenImage5");
    image3?.classList.add("hiddenImage3");
    image4?.classList.remove("hiddenImage4");
  } else if (numberImage == 3) {
    image2?.classList.add("hiddenImage2");
    image1?.classList.add("hiddenImage1");
    image5?.classList.add("hiddenImage5");
    image3?.classList.remove("hiddenImage3");
    image4?.classList.add("hiddenImage4");
  } else if (numberImage == 2) {
    image2?.classList.remove("hiddenImage2");
    image1?.classList.add("hiddenImage1");
    image5?.classList.add("hiddenImage5");
    image3?.classList.add("hiddenImage3");
    image4?.classList.add("hiddenImage4");
  } else if (numberImage == 1) {
    image2?.classList.add("hiddenImage2");
    image1?.classList.remove("hiddenImage1");
    image5?.classList.add("hiddenImage5");
    image3?.classList.add("hiddenImage3");
    image4?.classList.add("hiddenImage4");
  }
}

hamburgerButton?.addEventListener("click", hamburgerDeployFunction);
buttonArrowLeft?.addEventListener("click", changeImageLeft);
buttonArrowRight?.addEventListener("click", changeImageRight);
