function runtimer (pageelement){
    currtime = 50; 
    timeout = 0;
    for(i=0;i<11;i++){
        setTimeout(function(){
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

alert("This is your fullname: " + fullname + " and your badgenumber is: " + badgenumber);


}
//These functions are for a later assignment
function startbtnclick(){
document.getElementById("BtnStart").disabled=true;
document.getElementById("BtnStop").disabled=false;
}
function stopbtnclick(){
    document.getElementById("BtnStart").disabled=false;
    document.getElementById("BtnStop").disabled=true;
}
//this is a work in progress for a later assignment