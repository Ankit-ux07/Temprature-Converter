const txtarea = document.getElementById("txtarea");
const tofhrenhiet = document.getElementById("tofrnite");
const toclSius = document.getElementById("toclsius");
const otpt = document.getElementById("otpt");
let temp;

function convert(){
   if (tofhrenhiet.checked){
    temp = Number(txtarea.value);
    temp = temp * 9/5 + 32;
     otpt.textContent = temp.toFixed(1) + "°F";
   }
   else if (toclSius.checked){
    temp = Number(txtarea.value);
    temp = ( temp - 32 ) * 5/9 ;
     otpt.textContent = temp.toFixed(1) + "°C";

   }
   else{
    otpt.textContent = "Select a unit";
   }
}