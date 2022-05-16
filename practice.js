const firebaseConfig = {
    apiKey: "AIzaSyD_HrD8kU5VN0MZSRlLpEILqVVFXFVE1ZU",
    authDomain: "kwitter-41e2f.firebaseapp.com",
    databaseURL: "https://kwitter-41e2f-default-rtdb.firebaseio.com",
    projectId: "kwitter-41e2f",
    storageBucket: "kwitter-41e2f.appspot.com",
    messagingSenderId: "770027629715",
    appId: "1:770027629715:web:a9dc910bc43d32e392f166",
    measurementId: "G-6TN61J2KPT"
  };
  
  firebase.initializeApp(firebaseConfig);
  
function addUser ()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update
    ({ purpose : "adding user"});
}