

const completeButton = document.querySelector(".completeButton");
const theInputOne = document.querySelector(".theInputOne"); 
const theInputTwo = document.querySelector(".theInputTwo");
const messageOne = document.querySelector(".messageOne");
const messageTwo = document.querySelector(".messageTwo");

completeButton.addEventListener('click', function() {

    messageOne.innerHTML = theInputOne.value;
    messageTwo.innerHTML = theInputTwo.value;

    //alert("hello")

    //alert(theInputOne.value);
    //alert(theInputTwo.value);

    

});