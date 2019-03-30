
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

// Gets called whenever the user clicks "sign in" or "sign out".
function toggleSignIn() {
  if (!firebase.auth().currentUser) { // if the user's not logged in, handle login
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log("success");
    }).catch(function(error) {
      console.error("error", error);
    });
  } else { // handle logout
    firebase.auth().signOut();
  }
  //This disables the button until login or logout is successful. You'll want to replace 'login-button' with the id of your login button.
  $('#login-button').attr("disabled", true);
}

function handleMessageFormSubmit(){

  var FirstName = $("#FirstName").val();
  var LastName = $("#LastName").val();
  var Age = $("#Age").val();
  var FaveSuperhero = $("#SuperHero").val();
  var body = FirstName + " " + LastName + " " + Age + " " + FaveSuperhero;
  console.log(body);
  addMessage(FirstName, LastName, Age, FaveSuperhero);
}

function addMessage(var1, var2, var3, var4){

  var postData = {
    FirstName: var1,
    LastName: var2,
    Age: var3,
    FaveSuperhero: var4
  };

  var newPostKey = firebase.database().ref().child('stream').push().key;
  firebase.database().ref('/stream/' + newPostKey).set(postData);
}