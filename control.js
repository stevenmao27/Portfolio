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
        setTimeout(() => {availableToScroll = true;}, 200);
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
    "I'm Majoring in Computer Science",
    "Roasted Duck Tastes So Good Mmmmm",
    "You're Still Watching?",
    "Stop.",
    "...", 
    "...",
    "I'm Studying Software Engineering",
    "You Thought That Was A Loop, Didn't You?",
    "You've Made It This Far, Let Me Tell You Something",
    "i hate veggies >:-( 🥬",
    "i have $70 worth of chickfila reward points 🤡"
];

window.onload = () => {
    // setTimeout(draw, 1000);
    html = $('.intro-desc')
    if (window.innerWidth > 991) {
        setAnimation()
    }
    else html.text("I Love Computer Science!")
}

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

// let i = 0; // index of character in current word
// let w = 0; // index of word in word bank
// let wordBank = ["I'm Studying Software Engineering", "I'm Studying Data Science"];
// let currWord = wordBank[w];
// let html; // html object
// let mode = 0; // 0: adding, 1: waiting, 2: deleting


// INFINITE RECURSION. DOES EVERYTHING. MODES: add html, do nothing, delete
// function draw() {
//     html.text(html.text() + currWord[i])
//     i++
//     // adding done
//     if (i !== currWord.length) setTimeout(draw, 500)
//     else {
//         i--
//         setTimeout(undraw, 3000)
//     }
// }

// function undraw() {
//     html.text(html.text().slice(0, -1))
//     i--
//     // deleting done, set up next word
//     if (i >= 0) {
//         setTimeout(undraw, 500)
//     }
//     else {
//         i = 0
//         w = (w + 1) % wordBank.length
//         currWord = wordBank[w]
//         setTimeout(draw, 1000)
//     }
// }