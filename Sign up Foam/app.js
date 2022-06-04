const firebaseConfig = {
    apiKey: "AIzaSyApIZVyhnIMAMKjBDHGv_12aMnzvMdvosI",
    authDomain: "todo-912b8.firebaseapp.com",
    databaseURL: "https://todo-912b8-default-rtdb.firebaseio.com",
    projectId: "todo-912b8",
    storageBucket: "todo-912b8.appspot.com",
    messagingSenderId: "650518718474",
    appId: "1:650518718474:web:960aae077d873a4e6757f3"
  };

  var app = firebase.initializeApp(firebaseConfig);

  console.log(app)
  function saveData(){
      app.database().ref('/').child("users").push({ UserName:"zain", email:"zain faisal" , pass:1234})
  }

  function signUp(){
      var user = document.getElementById('fname').value
      var eml = document.getElementById('eemail').value
      var pass = document.getElementById('lpassword').value
var obj = {
    UserName:user,
    email:eml,
    password:pass
}
console.log(obj);

app.database().ref('/users').push(obj);
getUserData()

  }

function getUserData(){
   app.database().ref('/users').on("child_added",function(data){
       // console.log(data)
       console.log(data.key)
       //console.log(data.val())
   })

}
