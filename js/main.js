const firebaseConfig = {
    apiKey: "AIzaSyCzdtlxFvLDAK3W5rlsTyOhPBOS79uUen0",
    authDomain: "contactform-2a3f0.firebaseapp.com",
    databaseURL: "https://contactform-2a3f0-default-rtdb.firebaseio.com",
    projectId: "contactform-2a3f0",
    storageBucket: "contactform-2a3f0.appspot.com",
    messagingSenderId: "592093636562",
    appId: "1:592093636562:web:50cae44a48705ddc2aca0b",
    measurementId: "G-SV8YVQ319X"
  };

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("message");

  console.log(name, emailid, msgContent);

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });

  alert("Message Submitted!!");

  document.getElementById("contactForm").reset();
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};