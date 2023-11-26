function checkName(){
	var regName = /^[a-zA-Z]/;
	var name = document.getElementById("NameInput").value;
	if(!regName.test(name)){
		alert('Invalid name given. Your name should only contain letters [A-Z]');
		document.getElementById('NameInput').focus();
		return false;}}
										
function checkMail(){
	var regName = /^[a-zA-Z]+[@]+[a-zA-Z]/;
	var email = document.getElementById("EmailInput").value;
	if(!regName.test(email)){
		alert('Invalid email given.');
		document.getElementById('EmailInput').focus();
		return false;}}
										
function checkTel(){
	var regaName = /^[0-9]{10}/;
	var phone = document.getElementById("telInput").value;
	if(!regaName.test(phone)){
		alert('Invalid phone number given. Your phone number should only contain numbers [0-9] and 10 digits long.');
		document.getElementById('telInput').focus();
		return false;}}
		
function checkDOB(){
	var year = 2017;
	var date = new Date(document.getElementById("DateOfBirth").value);
	if(year <= (date.getFullYear())){
		alert('Invalid DOB given. Year of birth cannot be 2017 or above.');
		document.getElementById('DateOfBirth').focus();
		return false;}}
		
function checkPhoto(){
	var file = document.getElementById("myFile");
	if(file.value.length < 4) {
		alert('Please insert ID picture of your child.');
		file.focus();
		return false;}}
		
function saveUser(){

// 	var names = document.getElementById("NameInput").value;
// 	localStorage.setItem("Name", names.val());
// 	var emails =document.getElementById("EmailInput").value;
// 	localStorage.setItem("Email", emails.val());
// 	var phoneNos =document.getElementById("telInput").value;
// 	localStorage.setItem("PhoneNo", phoneNos.val());
// 	localStorage.setItem("DOB", DOBs.val());

// }
var form = document.getElementById("regForm");
    var name = document.getElementById("NameInput").value;
    var mail = document.getElementById("EmailInput").value;
    var tel = document.getElementById("telInput").value;
    var gender = getRadioVal(form, 'Gender');
    var date =document.getElementById("DateOfBirth").value;

    if(name!=null&&mail!=null&&tel!=null){
      if(confirm("Name: "+name+"\n"+"Mail: "+mail+"\n"+"Tel: "+tel+"\n"+"gender: "+gender+"\n"+"date: "+date+"\n"+
      "Are you sure you want to save these information?")){
        //create a new object from user
        var user = new Object();
        user.name= name;
        user.mail=mail;
        user.tel=tel;
        user.gender=gender;
        user.date=date;

        //get the array from the local storage
        var users = JSON.parse(localStorage.getItem("users"));
        if(users==null){ //no regestired users are saved in the local storage
          users=[]; // initialize the array
        }

        //add the user to the users array
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        
      }
    }}
	
function getUserInfo(){
// 	// Retrieve
// 	document.getElementById("NameInput").innerHTML = localStorage.getItem("Name");
// 	document.getElementById("EmailInput").innerHTML = localStorage.getItem("Email");
// 	document.getElementById("telInput").innerHTML = localStorage.getItem("PhoneNo");
// 	document.getElementById("DateOfBirth").innerHTML = localStorage.getItem("DOB");
// }
function getUserInfo() {
    var users = JSON.parse(localStorage.getItem("Name"));
    if(users!=null) {
      var fs = document.getElementById("memberschild");
      fs.style.display="block";
      for(var i=0; i<users.length; i++) {
         var div = document.createElement("div");
         var p = document.createElement("p");
         var text = document.createTextNode("Name: "+users[i].name+"\n");
         p.appendChild(text);
         div.appendChild(p);
         fs.appendChild(div);
      }
    }
}}
