/* global console */

/*  pour avoir la selection 



pp.onmousemove= function (){
    
    hex.textContent = window.getSelection();
}

*/



var tex=document.forms[0].tex,
    lett=document.querySelectorAll('.letter'),
    wor=document.getElementById('word'),
    che=document.getElementById('chec');
    
lett[0].style.color='#f00';


tex.onkeyup = function () {
    
    'use strict';
        
    if(che.checked==true) {
        
        tex.value=tex.value.replace(/ {2,}/g,' ');
    
    }

    
lett[0].textContent=tex.value.trim().length;
wor.textContent=tex.value.toString().trim().split(' ').length;
    
    if(tex.value.length===0) {
        wor.textContent=0;
    }
    
}



    
  che.onclick = function () {
      
         if(che.checked==true) {
        
        tex.value=tex.value.replace(/ {2,}/g,' ');
    
    }
      
  }  