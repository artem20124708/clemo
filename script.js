// Intro scrollers

function introScroller(focusedScroller, scrollElem) {
    document.querySelector('.scroller_active').classList.remove("scroller_active")
    focusedScroller.classList.add("scroller_active")
    scrollElem.scrollIntoView({behavior: "smooth"})
}

document.querySelector('#scrollToIntro').addEventListener('click', function() {
    introScroller(this, document.querySelector('.intro'))
})

document.querySelector('#scrollToWwedo').addEventListener('click', function() {
    introScroller(this, document.querySelector('.wwedo__title'))
})
document.querySelector('#scrollToBestwork').addEventListener('click', function() {
    introScroller(this, document.querySelector('.bestwork__title'))
})
document.querySelector('#scrollToBestteam').addEventListener('click', function() {
    introScroller(this,document.querySelector('.bestteam'))
})
document.querySelector('#scrollToClients').addEventListener('click', function() {
    introScroller(this, document.querySelector('#clientsSay'))
})

// Clients

function clientsScroller(focusedScroller, scrollElem) {
    document.querySelector('.clients__scroller_active').classList.remove("clients__scroller_active")
    focusedScroller.classList.add("clients__scroller_active")
    document.querySelector('.card_active').classList.remove("card_active")
    scrollElem.classList.add("card_active")
}

document.querySelectorAll('.firstClient').addEventListener('click', function(){
    clientsScroller(this, document.querySelector('#clientOne'))
})
document.querySelectorAll('.secondClient').addEventListener('click', function(){
    clientsScroller(this, document.querySelector('#clientTwo'))
})
document.querySelectorAll('.thirdClient').addEventListener('click', function(){
    clientsScroller(this, document.querySelector('#clientThree'))
})
document.querySelectorAll('.fourthClient').addEventListener('click', function(){
    clientsScroller(this, document.querySelector('#clientFour'))
})