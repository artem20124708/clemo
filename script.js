// Intro scrollers

function scroller(scrollElem) {
    scrollElem.scrollIntoView({behavior: "smooth"})
}

document.querySelector('#scrollToWwedo').addEventListener('click', function() {
    scroller(document.querySelector('.wwedo__title'))
})
document.querySelector('#scrollToBestwork').addEventListener('click', function() {
    scroller(document.querySelector('.bestwork__title'))
})
document.querySelector('#scrollToBestteam').addEventListener('click', function() {
    scroller(document.querySelector('.bestteam'))
})
document.querySelector('#scrollToClients').addEventListener('click', function() {
    scroller(document.querySelector('#clientsSay'))
})