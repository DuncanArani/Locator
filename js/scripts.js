$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$('#bt').click(function() {
  window.location='index.html';
});


function feedback(){
  var email= document.getElementById('Email');

  email.innerHTMl= email;
};
