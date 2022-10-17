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
function startbtnclick(){}
function stopbtnclick(){}