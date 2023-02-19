//الكلام المتحرك 
let name = "طريق النجاح";
let index = 1;
function text(){
    let title= document.getElementById("xtreme");
    title.textContent=name.slice(0, index);
    index++;
   }
  setInterval( () => {
    text()
  }, 700)
// ترتيب ظهور الكود الغير متزامن
async function showData(){
    await new Promise( (resolve, reject) => {
     setTimeout( () => {
         document.getElementById("title1").style.visibility= "visible"
         resolve()
     }, 1000)
 }) 
     await new Promise( (resolve) => {
         setTimeout( () => {
             document.getElementById("title2").style.visibility= "visible"
             resolve()
         }, 1000)
     }) 
       await   new Promise( (resolve) => {
         setTimeout( () => {
             document.getElementById("title3").style.visibility= "visible"
             resolve()
         }, 1000)
     }) 
     await   new Promise( (resolve) => {
         setTimeout( () => {
             document.getElementById("title4").style.visibility= "visible"
             resolve()
         }, 1000)
     }) 

}
showData()