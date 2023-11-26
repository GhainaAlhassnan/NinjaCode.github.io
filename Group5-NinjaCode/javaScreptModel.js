

function myFunction2() {
//     document.body.style.backgroundColor = document.getElementByClassName(dark1).innerHTML;
//     document.getElementsById(BodychangebackgrondColor).style.backgroundColor = document.getElementByClassName(dark1).innerHTML;
//    document.body.style.color = document.getElementByClassName(dark2).innerHTML;
  document.body.style.color = "rgb(189, 178, 171)";
  document.body.style.background = "rgb(49, 49, 49)";


    //    var element = document.body;
    // //    if(true)
    //   element.classList.toggle("dark-mode");  
    // document.body.style.color = document.classlist("dark-mode");
    //  if(element.style.color= "#black" && element.style.background!="#c2b190")
    // element.classList.toggle("light-mode");  
}
function myFunction3() {
   
      document.body.style.color = "#000000";
      document.body.style.background = "#c2b190";
        
    }
// Get the modal
window.onload = function(){

    var modal2 = document.getElementById("form-popup");
                
    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn2");
    
    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn2.onclick = function() {
    modal2.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
    modal2.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }

    //****************** *//
    // Get the modal
    var modal = document.getElementById("myModal");
              
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


    //********************//
    // window.onscroll = function() {myFunction()};
    // var header = document.getElementById("myHeader");
    // var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    if (document.readyState == 'loading') {
        // still loading, wait for the event
        document.addEventListener('DOMContentLoaded', work);
      } else {
        // DOM is ready!
        getUsers();
      }

}



function getUsers() {
    var users = JSON.parse(localStorage.getItem("users"));
    if(users!=null) {
      var fs = document.getElementById("members");
      fs.style.display="block";
      for(var i=0; i<users.length; i++) {
        //  var div = document.createElement("div");
         var p = document.createElement("p");
         var text = document.createTextNode("Name: "+users[i].name+"\n");
         p.appendChild(text);
         div.appendChild(p);
        //  fs.appendChild(div);
      }
    }
}

////////////////////////////////////

//////////////////////////////////////////////////////
function checkName() {
  var myName = document.getElementById("NameInput");
  // Test the format of the input name 
  //  Allow the spaces after the commas to be optional
  //  Allow the period after the initial to be optional

  var pos = myName.value.search(/^[A-Za-z]+$/);
  //starts with one or more characters followed by , 
  // followed by 0 or 1 spaces and one or more character followed by,
  // followed by 0 or 1 spaces and Capital letter followed by 0 or 1 
  if (pos != 0) {
    document.getElementById("valName").style.visibility="visible";
    document.getElementById("valName").style.top="15%";
    return false;
  } else
  document.getElementById("valName").style.visibility="hidden";
    return true;
  }

  function checkMail() {
  var myMail = document.getElementById("EmailInput");
  // Test the format of the input mail 
  //  Allow the spaces after the commas to be optional
  //  Allow the period after the initial to be optional

  var pos = myMail.value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  //starts with one or more characters followed by , 
  // followed by 0 or 1 spaces and one or more character followed by,
  // followed by 0 or 1 spaces and Capital letter followed by 0 or 1 
  if (pos != 0) {
    document.getElementById("valMail").style.visibility="visible";
    document.getElementById("valMail").style.top="22.5%";
    return false;
  } else
    document.getElementById("valMail").style.visibility="hidden";
    return true;
  }
  

  // The event handler function for the phone number text box
  function checkTel() {
      var myPhone = document.getElementById("telInput");
      // Test the format of the input phone number
      var x
      // Get the value of the input field with id="numb"
      x = myPhone.value;
      // If x is Not a Number or less than one or greater than 10
      if (isNaN(x)) {
        document.getElementById("telLength").style.visibility="hidden";
        document.getElementById("valTel").style.visibility="visible";
        document.getElementById("valTel").style.top="30%";
        return false;
      } else if(x.length!=10) {
        document.getElementById("valTel").style.visibility="hidden";
        document.getElementById("telLength").style.visibility="visible";
        document.getElementById("telLength").style.top="30%";
      }
      else{
      document.getElementById("telLength").style.visibility="hidden";
      document.getElementById("valTel").style.visibility="hidden";
        return true;
      }
    }
  

  function saveUser() {
    
    var form = document.getElementById("regForm");
    var name = document.getElementById("NameInput").value;
    var mail = document.getElementById("EmailInput").value;
    var tel = document.getElementById("telInput").value;
    // alert("tel:",tel);
    
    // var gender = getRadioVal(form, 'Gender');
    // var date = document.getElementById("date").value;
    
    

    // //convert day+month+year to Date type
    // var d = year.toString()+" "+month.toString()+" "+day.toString();
    // var date = new Date(d).toISOString().split('T')[0];
    
    if(name!=null&&mail!=null&&tel!=null){

      if(confirm("Name: "+name+"\n")){
        //create a new object from user
        var user = new Object();
        user.name= name;

        // user.mail=mail;
        // user.tel=tel;
        // user.gender=gender;
        // user.date=date;


        //get the array from the local storage
        var users = JSON.parse(localStorage.getItem("parentDefaultKids"));
        alert("4:",users[0]);


        if(users==null){ //no regestired users are saved in the local storage
          users=[]; // initialize the array

        }

        //add the user to the users array
        users.push(name);
        alert("5:",users);

        localStorage.setItem("users", JSON.stringify(users));
        alert("6:",users);


        // var childNames = JSON.parse(localStorage.getItem("childName"));
        var childNames = JSON.parse(localStorage.getItem(users.name));

        if(childNames==null){ //no regestired users are saved in the local storage
            childNames=[]; // initialize the array
            alert("7:",users);

          }
        // childNames.push(name);

        localStorage.setItem("childName", JSON.stringify(childNames));


        
      }
    }
  }

//   function getRadioVal(form, name) {
//     var val;
//     // get list of radio buttons with specified name
//     var radios = form.elements[name];
    
//     // loop through list of radio buttons
//     for (var i=0, len=radios.length; i<len; i++) {
//         if ( radios[i].checked ) { // radio checked?
//             val = radios[i].value; // if so, hold its value in val
//             break; // and break out of for loop
//         }
//     }
//     return val; // return value of checked radio or undefined if none checked
// }


 function changebackgrondColor(id){
    document.body.style.backgroundColor = document.getElementById(id).innerHTML;
    document.getElementsById(BodychangebackgrondColor).style.backgroundColor = document.getElementById(id).innerHTML;


  }

  function changefontColor(id){
   document.body.style.color = document.getElementById(id).innerHTML;
  }


  
 

 
      function searchFunction() {
        var x = document.getElementById("searchForm");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
     
      
// function getUserInfo() {
//     var users = JSON.parse(localStorage.getItem("Name"));
    
//     if(users!=null) {
//       var fs = document.getElementById("memberschild");
//       fs.style.display="block";
//       for(var i=0; i<users.length; i++) {
//         //  var div = document.createElement("div");
//          var p = document.createElement("p");
//          var text = document.createTextNode("Name: "+users[i].name+"\n");
//          p.appendChild(text);
//          div.appendChild(p);
//         //  fs.appendChild(div);

//       }
//     }
// }



      
function getUserInfo() {
  var childNames = JSON.parse(localStorage.getItem(childNames));
  
  if(childNames!=null) {
    var fs = document.getElementById("memberschild");
    fs.style.display="block";
    for(var i=0; i<childNames.length; i++) {
      //  var div = document.createElement("div");
       var p = document.createElement("p");
       var text = document.createTextNode("Name: "+childNames[i]+"\n");
       p.appendChild(text);
       div.appendChild(p);
      //  fs.appendChild(div);

    }
  }
}

// const txt1 = document.getElementById('NameInput');
// const btn1 = document.getElementById('submitRigesterKid');
// const out1 = document.getElementById('tryout');

// function fn1(){
//     out1.innerHTML = txt1.value;
// }

// btn1.addEventListener('click',fn1);

