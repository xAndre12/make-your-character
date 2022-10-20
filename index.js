let sageataCapDreapta = document.querySelector(".cap2");
let sageataCapStanga = document.querySelector(".cap1");
let sageataOchiStanga = document.querySelector(".ochi2");
let sageataOchiDreapta = document.querySelector(".ochi1");
let sageataNasDreapta = document.querySelector(".nas2");
let sageataNasStanga = document.querySelector(".nas1");
let sageataGuraDreapta = document.querySelector(".gura2");
let sageataGuraStanga = document.querySelector(".gura1");

const listCap = ["./img/par 1.png", "./img/par 2.png", "./img/par 3.png"];
const listGura = ["./img/gura 1.png", "./img/gura 2.png", "./img/gura 3.png"];
const listOchi = ["./img/ochi 1.png", "./img/ochi 2.png", "./img/ochi 3.png"];
const listNas = ["./img/nas 1.png", "./img/nas 2.png", "./img/nas 3.png"];

let cap = document.querySelector(".capversion");
let ochi = document.querySelector(".ochiversion");
let nas = document.querySelector(".nasversion");
let gura = document.querySelector(".guraversion");

cap.setAttribute("src", listCap[0]);
ochi.setAttribute("src", listOchi[0]);
nas.setAttribute("src", listNas[0]);
gura.setAttribute("src", listGura[0]);

let indexCap = 0;
let indexOchi = 0;
let indexNas = 0;
let indexGura = 0;

sageataCapDreapta.addEventListener("click", () => {
  cap.src = listCap[indexCap];
  indexCap++;
  if (indexCap === 3) {
    indexCap = 0;
  }
});
sageataCapStanga.addEventListener("click", () => {
  cap.src = listCap[indexCap];
  indexCap--;
  if (indexCap === -1) {
    indexCap = 2;
  }
});
sageataOchiDreapta.addEventListener("click", () => {
  ochi.src = listOchi[indexOchi];
  indexOchi++;
  if (indexOchi === 3) {
    indexOchi = 0;
  }
});
sageataOchiStanga.addEventListener("click", () => {
  ochi.src = listOchi[indexOchi];
  indexOchi--;
  if (indexOchi === -1) {
    indexOchi = 2;
  }
});
sageataNasStanga.addEventListener("click", () => {
  nas.src = listNas[indexNas];
  indexNas--;
  if (indexNas === -1) {
    indexNas = 2;
  }
});
sageataNasDreapta.addEventListener("click", () => {
  nas.src = listNas[indexNas];
  indexNas++;
  if (indexNas === 3) {
    indexNas = 0;
  }
});
sageataGuraStanga.addEventListener("click", () => {
  gura.src = listGura[indexGura];
  indexGura--;
  if (indexGura === -1) {
    indexGura = 2;
  }
});
sageataGuraDreapta.addEventListener("click", () => {
  gura.src = listGura[indexGura];
  indexGura++;
  if (indexGura === 3) {
    indexGura = 0;
  }
});
