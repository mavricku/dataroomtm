const signupForm = document.querySelector('#signup-form');
if(signupForm){
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //  function signUpForm(){
    const email=signupForm['signup-email'].value;
    const password=signupForm['signup-password'].value;
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return db.collection('users').doc(userCredential.user.uid).set({
      name: signupForm['signup-full-name'].value
    });
    console.log(userCredential);
  });
  }).then(() => {
    signupForm.reset();
  });
};
function loginButton(){
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
    
      // get user info
      const email = loginForm['login-email'].value;
      const password = loginForm['login-password'].value;
      console.log('login sucessfully');
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
      console.log(userCredential);
       document.location.href="dash.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      })
      });
      }
      function logOut(){
        const logout = document.querySelector('#logout');
        logout.addEventListener('click', (e) => {
          e.preventDefault();
          auth.logOut().then(() => {
            console.log('user signed out');
          })
         });
        };
        function onSignIn(googleUser) {
            if(googleUser){
            console.log("true");
           window.location.href="dash.html";
     
             // Useful data for your client-side scripts:
             var profile = googleUser.getBasicProfile();
             console.log("ID: " + profile.getId()); // Don't send this directly to your server!
             console.log('Full Name: ' + profile.getName());
             console.log('Given Name: ' + profile.getGivenName());
             console.log('Family Name: ' + profile.getFamilyName());
             console.log("Image URL: " + profile.getImageUrl());
             console.log("Email: " + profile.getEmail());
     
             // The ID token you need to pass to your backend:
             var id_token = googleUser.getAuthResponse().id_token;
             console.log("ID Token: " + id_token);
         }
         }
     
        