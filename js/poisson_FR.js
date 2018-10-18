$(function() {

    // jQuery code FR

    $('.beemode').on('change', function() {
        if (this.checked) {
            $('#poisson').attr('src','img/bee.png');
            $('#poisson_super').attr('src','img/bee2.png');
            $('.slogan h1').html('La ruche<br>du web.');
        } else {
            $('#poisson').attr('src','img/poisson_gray.png');
            $('#poisson_super').attr('src','img/poisson_gray.png');
            $('.slogan h1').html('Le web sans<br>les arêtes.');
        }
    });

    var options = {
        strings: ["soluble", "crème", "allongé", "corsé", "serré", "arrosé", "court"],
        typeSpeed: 80,
        backDelay: 3000,
        backSpeed: 80,
        loop: true
    }
    var typed = new Typed("#word-change", options);

});
