  
  window.onscroll = function() {myFunction()};


  var header = document.getElementById("navbar");
  var logo = document.getElementById("logo");
  var sticky = header.offsetTop;

  logo.style.visibility = "hidden";
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("bg-transperent");
      logo.style.visibility = "visible";

    } else {
      header.classList.remove("bg-transperent");
      logo.style.visibility = "hidden";
    }
  }