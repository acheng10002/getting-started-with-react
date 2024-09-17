function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

function getImageUrlOne(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function getImageUrlTwo(imageId) {
  return "https://i.imgur.com/" + imageId + "s.jpg";
}

function getImageUrlThree(person, size) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

/* initial state - counter = 0, and console is blank
here, the state changes every second because the counter variable is
incremented every second and it gets logged to the console 

changes in data trigger changes in state */
let counter = 0;

function incrementCounter() {
  counter = counter + 1;
  renderState();
}

function renderState() {
  console.log(counter);
}

setInterval(function () {
  incrementCounter();
}, 1000);

export { getImageUrl, getImageUrlOne, getImageUrlTwo, getImageUrlThree };
