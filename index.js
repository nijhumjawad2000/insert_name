$( document ).ready(function() {
var Name = document.querySelector('.name');
var button = document.querySelector('.clickIt');
var arr = [];
for (var i = 1; i < 13; i++) {
   arr.push(prompt(i + ". Enter Name Here : "));
}

function clickButton() {
    if(arr.length !==0 ){
   Name.innerHTML = arr.shift();
    }
  
}

button.addEventListener('click', function (e) {
   clickButton();
})
});