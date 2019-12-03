  
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

  function menuButtonToggle(x) {
    x.classList.toggle("change");
   
  }

  function menuButtoToggle() {
    $('#navbarNavAltMarkup').removeClass("show");
  }

  



  // page redirect according to window size

  var page = "";
  function pageChange(page){
    
    var murl = page + "m.html" ;
    var url = page + ".html";

    if(window.innerWidth > 800){
      window.location.href =url;
    }
    else{
      window.location.href = murl;
    }
  }




  $("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});


