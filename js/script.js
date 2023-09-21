//   Counter number
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Four section Show&Hide
jQuery(function(){
    jQuery(".show-2").click(function(){
        jQuery(".menu-items").hide();
        jQuery("#menu-items-2").show();
        document.getElementById("starters").style.borderBottomColor="gray";
        document.getElementById("breakfast").style.borderBottomColor="rgb(201, 12, 12)";
        document.getElementById("lunch").style.borderBottomColor="gray";
        document.getElementById("dinner").style.borderBottomColor="gray";
        document.getElementById("breakfast").style.transition="all 0.5s";
    });
});
jQuery(function(){
    jQuery(".show-3").click(function(){
        jQuery(".menu-items").hide();
        jQuery("#menu-items-3").show();
        document.getElementById("starters").style.borderBottomColor="gray";
        document.getElementById("breakfast").style.borderBottomColor="gray";
        document.getElementById("lunch").style.borderBottomColor="rgb(201, 12, 12)";
        document.getElementById("dinner").style.borderBottomColor="gray";
        document.getElementById("lunch").style.transition="all 0.5s";
    });
});
jQuery(function(){
    jQuery(".show-4").click(function(){
        jQuery(".menu-items").hide();
        jQuery("#menu-items-4").show();
        document.getElementById("starters").style.borderBottomColor="gray";
        document.getElementById("breakfast").style.borderBottomColor="gray";
        document.getElementById("lunch").style.borderBottomColor="gray";
        document.getElementById("dinner").style.borderBottomColor="rgb(201, 12, 12)";
        document.getElementById("dinner").style.transition="all 0.5s";
    });
});
jQuery(function(){
    jQuery(".show-1").click(function(){
        jQuery(".menu-items").hide();
        jQuery("#menu-items-1").show();
        document.getElementById("starters").style.borderBottomColor="rgb(201, 12, 12)";
        document.getElementById("breakfast").style.borderBottomColor="gray";
        document.getElementById("lunch").style.borderBottomColor="gray";
        document.getElementById("dinner").style.borderBottomColor="gray";
        document.getElementById("starters").style.transition="all 0.5s";
    });
});

//Toggle Show&Hide (Right To Left)
    jQuery(function(){
        jQuery(".fa-navicon").click(function(){
            document.getElementById("nav-menu").style.left="45%";
            document.getElementById("nav-menu").style.transition="all 0.5s";
            jQuery(".fa-close").show();
        });
        jQuery(".fa-close").click(function(){
            jQuery(".fa-close").hide();
            document.getElementById("nav-menu").style.left="96%";
            document.getElementById("nav-menu").style.transition="all 0.5s";
        });
    });
// Nav sub-menu
    jQuery(function(){
        jQuery(".sub-menu-toggle").click(function(){
            jQuery(".sub-menu").slideToggle();
        });
    });

    // Nav main sub-menu
    jQuery(function(){
        jQuery(".main-sub-menu-toggle").click(function(){
            jQuery(".sub-menu2").slideToggle();
        });
    });

// Book a table
function booktable(){
    alert("Thank you for booking a table!");
}