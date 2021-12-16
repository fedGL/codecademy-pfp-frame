const outputImage = document.getElementById("result");
const context = outputImage.getContext("2d");

let img2 = document.createElement("img");
img2.src = "/assets/frame.png";

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFile, false);

function handleFile(e) {
  const file = e.target.files;

  // create img element to attach uploaded file to
  let img = document.createElement("img");
  img.src = URL.createObjectURL(file[0]);
  
  //Show the result section
  showResult()

  //.onload needed for canvas to work
  img.onload=function () {
    // frame.png is 768x768
    // match output to frame size
    outputImage.width = 768;
    outputImage.height = 768;
    context.globalAlpha = 1.0;
    context.drawImage(img, 0, 0,768,768);
    context.drawImage(img2, 0, 0);
  }

}

const showResult = () => {
  const resultsContainer = document.getElementById('result-container')
  resultsContainer.style.display = 'block'
}