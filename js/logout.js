//Logout Function
$(document).ready(function() {
$('.logoutBtn').click(function() {
    //clear the localstorage and redirect to signup page
    localStorage.clear();
    $('.checkLogin').html('Kindly login');
    window.location.assign('signup.html');
  });
});
