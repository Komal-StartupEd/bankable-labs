$(document).ready(function () {
    // Smooth scrolling
    $('nav a').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 56
        }, 800);
    });

    // Form submission
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        alert('Message sent successfully!');
        this.reset();
    });
});