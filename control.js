let availableToScroll = true;
let lastScrollPosition = 0;

// All scroll effects
window.onscroll = () => {
    if (availableToScroll) {
        let position = document.documentElement.scrollTop;

        //hide navigation?
        let isHidden = $("nav").hasClass("navbar-hidden");
        if ((position > lastScrollPosition && !isHidden) || (position < lastScrollPosition && isHidden)) {
            $("nav").toggleClass("navbar-hidden");
            $(".progress-track").toggleClass("raise-progress-bar");
        }

        //progress bar
        let progress = 100 * (document.body.scrollTop || position) / (document.body.scrollHeight - window.innerHeight);
        $(".progress-bar").css("transform", `translateX(${progress}vw)`);

        //putting scroll on cooldown, update lastScrollPosition after done
        availableToScroll = false;
        setTimeout(() => {availableToScroll = true;}, 200);
        lastScrollPosition = position;
    }
}