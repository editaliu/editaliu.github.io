$(document).ready(function () {
    //    close responsive menu after click on menu item  
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    })
});
