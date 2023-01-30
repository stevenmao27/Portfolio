let availableToScroll = true;
let lastScrollPosition = 0;

// All scroll effects
window.onscroll = () => {
    if (availableToScroll) {
        let position = document.documentElement.scrollTop;

        //hide or reveal navigation?
        let isHidden = $("nav").hasClass("navbar-hidden");
        if ((position > lastScrollPosition && !isHidden) || (position < lastScrollPosition && isHidden)) {
            $("nav").toggleClass("navbar-hidden");
            $(".progress-track").toggleClass("raise-progress-bar");
        }

        //update progress bar
        let progress = 100 * (document.body.scrollTop || position) / (document.body.scrollHeight - window.innerHeight);
        $(".progress-bar").css("transform", `translateX(${progress}vw)`);

        //putting scroll on cooldown, update lastScrollPosition after done
        availableToScroll = false;
        setTimeout(() => {availableToScroll = true;}, 100);
        lastScrollPosition = position;
    }
}

const blinkingAnimationStr = "blinking 1s step-end infinite"
let w = 0; // index of word in word bank
let wordBank = [
    "I'm Studying Software Engineering", 
    "I Study at Texas A&M University",
    "I'm Studying Data Science",
    "I'm Open-Minded and Creative!",
    "I'm Interested in Research",
    "I'm a Full Stack Developer",
    "Roasted Duck Is My Favorite Food",
];

function setAnimation() {
    let word = wordBank[w]
    w = (w + 1) % wordBank.length
    const elapsedTime = 3
    const waitTime = 2
    let animationProperty = `typing ${elapsedTime}s steps(${word.length}, start), ${blinkingAnimationStr}`

    html.text(word)
    html.css('animation', animationProperty)
    setTimeout(() => {html.css('animation', 'un' + animationProperty)}, (elapsedTime + waitTime) * 1000)
    setTimeout(setAnimation, (2 * elapsedTime + waitTime) * 1000)
}

window.onload = () => {
    // intro animation intialization
    html = $('.intro-desc')
    if (window.innerWidth > 991) {
        setAnimation()
    }
    else html.text("I'm a Computer Scientist.")

    // reveal animation initializaiton
    const SCROLL_OPTIONS = {
        delay: 200, 
        reset: false, 
        origin: 'bottom',
        distance: '50px',
        viewFactor: 0.20, 
        viewOffset: {top: 105}
    }
    let scroll = ScrollReveal();
    scroll.reveal('section', SCROLL_OPTIONS);
    scroll.reveal('#projects > div', SCROLL_OPTIONS);
    scroll.clean('#intro')
}