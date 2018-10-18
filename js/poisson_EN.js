$(function() {

    // jQuery code EN

    $('.beemode').on('change', function() {
        if (this.checked) {
            $('#poisson').attr('src','img/bee.png');
            $('#poisson_super').attr('src','img/bee2.png');
            $('.slogan h1').html('The hive<br>of the web.');
        } else {
            $('#poisson').attr('src','img/poisson_gray.png');
            $('#poisson_super').attr('src','img/poisson_gray.png');
            $('.slogan h1').html('The web without<br>the bony bits.');
        }
    });

    var options = {
        strings: ["soluble", "fortified", "short and black", "white", "full-bodied", "strong"],
        typeSpeed: 80,
        backDelay: 3000,
        backSpeed: 80,
        loop: true
    }
    var typed = new Typed("#word-change", options);

});
