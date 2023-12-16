const loginPanel = document.getElementById('loginPanel');
const signUpPanel = document.getElementById('signUpPanel');


  const emailL = document.getElementById('emailL');
  const passwordL = document.getElementById('passwordL');
  const submitL = document.getElementById('submitL');

  const linkSignUp = document.getElementById('linkSignUp');
  const linkLogin = document.getElementById('linkLogin');

  let errorHandlerL = document.getElementById('errorHandlerL');

  
  const emailS = document.getElementById('emailS');
  const passwordS = document.getElementById('passwordS');
  const cPasswordS = document.getElementById('cPasswordS');
  const submitS = document.getElementById('submitS');

  
  let errorHandlerS = document.getElementById('errorHandlerS');

 
  const loadingPanel = document.getElementById('loading-panel');



linkSignUp.addEventListener('click', e => {
  loginPanel.style = 'display:none';
  signUpPanel.style = 'display:block';
});

linkLogin.addEventListener('click', e => {
  loginPanel.style = 'display:block';
  signUpPanel.style = 'display:none';
});



submitL.addEventListener('click', e => {
  loadingPanel.style = 'display:block';

  let email = emailL.value;
  let password = passwordL.value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
 
  var errorCode = error.code;
  var errorMessage = error.message;

  loadingPanel.style = 'display:none';

  errorHandlerL.innerHTML = errorMessage;

});
});


submitS.addEventListener('click', e => {
  loadingPanel.style  ='display:block';

  let email = emailS.value;
  let password = passwordS.value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
 
 var errorCode = error.code;
 var errorMessage = error.message;

 loadingPanel.style  ='display:none';

 errorHandlerS.innerHTML = errorMessage;
 // ...
});

});




firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
    loadingPanel.style  ='display:none';

    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

   
   let check = 0;

   firebase.database().ref('users/' + uid).on('value', snap => {
     check = 1;
   });

   if(check ==  0){

    writeNewUser(uid, displayName, email, photoURL, emailVerified);
  
  }else {
    window.location.href ='index.html';
  }





   



    
  } else {
    loadingPanel.style = 'display:none';
    
  }
});
