// Intro scrollers

function scroller(focusedScroller, scrollElem) {
    document.querySelector('.scroller_active').classList.remove("scroller_active")
    focusedScroller.classList.add("scroller_active")
    scrollElem.scrollIntoView({behavior: "smooth"})
}

document.querySelector('#scrollToIntro').addEventListener('click', function() {
    scroller(this, document.querySelector('.intro'))
})

document.querySelector('#scrollToWwedo').addEventListener('click', function() {
    scroller(this, document.querySelector('.wwedo__title'))
})
document.querySelector('#scrollToBestwork').addEventListener('click', function() {
    scroller(this, document.querySelector('.bestwork__title'))
})
document.querySelector('#scrollToBestteam').addEventListener('click', function() {
    scroller(this,document.querySelector('.bestteam'))
})
document.querySelector('#scrollToClients').addEventListener('click', function() {
    scroller(this, document.querySelector('#clientsSay'))
})