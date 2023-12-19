
function bos(w){
  let text = document.querySelector(".nav");
  let blok =document.querySelector(".blok");
  if(w==w){
    text.style.display ="block";
    text.style.transform = "translateX(500px)"
    blok.style.display = "none"
    text.style.transition = "all 2s";
   
  }
}
function bos2(e) {
  let text = document.querySelector(".nav");
  let blok =document.querySelector(".blok");
 
  if(e==e){
    text.style.display ="none";
    blok.style.display = "block";
    text.style.transition = "all 2s";  
    text.style.transform = "translateX(-500px)"
    
  }

}
