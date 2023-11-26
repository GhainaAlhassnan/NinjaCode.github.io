function submitRating(){
    var COURSE_NAME = document.getElementsByName("couresList")[0].value;
    console.log(COURSE_NAME);
    if (COURSE_NAME != "pleaseSelect") {
        var USER_RATING = document.querySelector('input[name="rating"]:checked').value;
         
        if(USER_RATING != "0"){
            alert("Thank you for your feedback!\nYour rating for course "+COURSE_NAME+" is "+USER_RATING);}
        else{
            alert("Please choose a rating.");
        }
    }
    else{
        alert("Please choose a course.");
    }
}