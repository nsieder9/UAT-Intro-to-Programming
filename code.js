var intervalIds = new Array();

function runtimer (pageelement){
    currtime = 50; 
    timeout = 0;
    for(i=0;i<11;i++){
        intervalIds[i] = setTimeout(function(){
            if (currtime==0){
                pageelement.innerHTML = currtime;
            alert("Blast Off")
            }
            else if(currtime<25){
                pageelement.innerHTML = "Warning Less than ½ way to launch, time left = "+currtime
            }
            else {
                pageelement.innerHTML = currtime;
            }

            currtime = currtime-5
            }, timeout);
            timeout= timeout+5000


    }
    

}
function getuserinput(){
fullname =""

do{
firstname = prompt("first name: ");
lastname = prompt("last name: ");

fullname = firstname + " " + lastname;

if (fullname.length > 20){
    alert("Please enter shorter names (less than 20 characters). Length entered: " + fullname.length)
}

}while(fullname.length > 20);





badgenumber = 0

do{
    badgenumber = prompt("Please enter your badge number: ")

    if (badgenumber > 1000){
        alert("Are you sure that is your badge number?")
    }

}while(badgenumber > 1000);

alert("This is your full name: " + fullname + " and your badge number is: " + badgenumber);


}
//These functions are for a later assignment
function startbtnclick(){
document.getElementById("BtnStart").disabled=true;
document.getElementById("BtnStop").disabled=false;

pageelement = document.getElementById ("displaycountdown");
runtimer (pageelement)
}
function stopbtnclick(){
    document.getElementById("BtnStart").disabled=false;
    document.getElementById("BtnStop").disabled=true;

    for(i=0;i<11;i++){
        clearTimeout(intervalIds[i]); 
    }
}
//this is a work in progress for a later assignment
let currTime = new Date();
    document.getElementByID("timeStamp").innerHTML = currTime;
    //let nowDate = new Date();
    //alert(nowDate); // shows current date/time
    //calling the countdown timer with the span DisplayCountdown

    function animateCarousel(){
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");
    
        nextButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        });
    
        prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
        });
    }