
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
}