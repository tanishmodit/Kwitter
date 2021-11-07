
var firebaseConfig = {
      apiKey: "AIzaSyC6rwS3QP0_E260HvZVP6mx4NcGyaO8TUo",
       authDomain: "abcde-f3c83.firebaseapp.com",
        databaseURL: "https://abcde-f3c83-default-rtdb.firebaseio.com",
         projectId: "abcde-f3c83", storageBucket: "abcde-f3c83.appspot.com",
          messagingSenderId: "1067038107209",
           appId: "1:1067038107209:web:569e550bd788509322c198" }; 
           // Initialize Firebase 
           firebase.initializeApp(firebaseConfig);
           
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= " Welcome "+ user_name +"!"
    
   function addroom(){
      room_name=document.getElementById("room_name").value;
      console.log(room_name)
      firebase.database().ref("/").child(room_name).update({
            purpose:"Hi I am Tanish Welcome To The Room"
            
      })

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"

   }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room_name"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'> #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();
function redirect(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"

}

function logout(){
 
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}
