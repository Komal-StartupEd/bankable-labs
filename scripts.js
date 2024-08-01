$(document).ready(function () {
    // Smooth scrolling
    $('nav a').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 56
        }, 800);
    });

    // Typing effect
    const text = "Your idea to app in 1 week";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            $('#typing-effect').append(text.charAt(index));
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    // Form submission
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        alert('Message sent successfully!');
        this.reset();
    });
});
