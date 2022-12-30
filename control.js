let availableToScroll = true;

window.onscroll = (ev) => {
    if (availableToScroll) {
        let progress = 100 - Math.floor((document.body.scrollTop || document.documentElement.scrollTop) / (document.body.scrollHeight - window.innerHeight) * 100);
        $(".progress-bar").css("width", progress + "%");
        availableToScroll = false;
        setTimeout(() => {availableToScroll = true;}, 200);
    }
}