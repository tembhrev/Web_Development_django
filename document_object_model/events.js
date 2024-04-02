//Let's explore some event samples!

var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

//Hover (mouseover and mouseout)
headOne.addEventListener('mouseover', function(){
    headOne.textContent = "Mouse currrently Over";
    headOne.style.color = 'red';
})

headOne.addEventListener('mouseout', function(){
    headOne.textContent = "Mouse Not On me.";
    headOne.style.color = 'blue';
})

headTwo.addEventListener('click', function(){
    headTwo.textContent = "Clicked On";
    headTwo.style.color = 'blue';
})

headThree.addEventListener('dblclick', function(){
    headThree.textContent = "Double Clicked!";
    headThree.style.color = 'red';
})