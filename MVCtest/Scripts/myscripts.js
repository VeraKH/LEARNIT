$(document).ready(function() {
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

   $(".header").hide().fadeIn(2500);

   $("#menu-toggle").hide().fadeIn(2500);

   $(".sign-up-btn").hide().fadeIn(2500);
      $(".sign-in-btn").hide().fadeIn(2500);

   $(".text-vertical-center h1").hide().slideDown(2500);

    $(".header text-vertical-center h1").css("opacity", 1);



    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    });