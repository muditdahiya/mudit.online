const photo = document.querySelector(".photo");
const desc = document.querySelector(".description");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

let i = 1;

const photos = [
  "",
  "images/photography/1.jpg",
  "images/photography/2.jpg",
  "images/photography/3.jpg",
  "images/photography/4.jpg",
  "images/photography/5.jpg",
  "images/photography/6.jpg",
  "images/photography/7.jpg",
  "images/photography/8.jpg",
  "images/photography/9.jpg",
  "images/photography/10.jpg",
];

const descs = [
  "",
  "desc1",
  "desc2",
  "desc3",
  "desc4",
  "desc5",
  "desc6",
  "desc7",
  "desc8",
  "desc9",
  "desc10",
];

function next() {
  i++;
  if (i == 11) {
    i = 1;
  }
  photo.src = photos[i];
  desc.innerHTML = descs[i];
}

function prev() {
  i--;
  if (i == 0) {
    i = 10;
  }
  photo.src = photos[i];
  desc.innerHTML = descs[i];
}

right.onclick = next;
left.onclick = prev;
