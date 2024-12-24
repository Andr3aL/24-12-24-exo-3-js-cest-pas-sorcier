// let imggg


// <button id="toggle-rectangle">
//         Cacher / Afficher le rectangle
//     </button>
//     <div class="rectangle rectangle2 rectangle3 rectangle4"></div>


// let forward = document.querySelector('.forward');







function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

 let toggleSwitch = document.querySelector('#flexSwitchCheckChecked');
 // toggleRectangle.style.width = "300px";
 // toggleRectangle.style.height = "200px";
 // toggleRectangle.style.backgroundColor = "blue";
 
//  let rectangle = document.querySelector(".rectangle");
 // rectangle.style.width = "300px";
 // rectangle.style.height = "200px";
 // rectangle.style.backgroundColor = "blue";
 


 toggleSwitch.addEventListener('click', ()=>{
     element.classList.toggle('dark-mode');
     
 });


