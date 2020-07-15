let colorGInput = document.querySelector("#colorG");
let hexaGInput = document.querySelector("#hexaG");
let colorPInput = document.querySelector("#colorP");
let hexaPInput = document.querySelector("#hexaP");


colorGInput.addEventListener("input", ()=>{
  let colorG = colorGInput.value;
  hexaGInput.value = colorG;
  

  document.querySelector("#boxx").style.backgroundColor = colorG
});


colorPInput.addEventListener("input", ()=>{
  let colorP = colorPInput.value;
  hexaPInput.value = colorP;
  

  document.querySelector("#minibox").style.backgroundColor = colorP
});


