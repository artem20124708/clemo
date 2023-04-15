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

// Bestteam slider

let pushedChecker = 1
let pushPx = -744
let scrollerActive = 1

document.querySelector('.p_r').addEventListener('click', function() {
    if (pushedChecker < 2) {
        pushPx -= 744
        document.querySelector('#f_slide').style.left = `${pushPx}px`
        document.querySelector('#s_slide').style.left = `${pushPx}px`
        document.querySelector('#t_slide').style.left = `${pushPx}px`
        document.querySelectorAll('.bestteam__scroller')[scrollerActive].style.backgroundColor = 'transparent'
        document.querySelectorAll('.bestteam__scroller')[scrollerActive + 1].style.backgroundColor = '#000'
        scrollerActive += 1
        pushedChecker += 1
        document.querySelector('.p_l').style.borderColor = '#000'
        if (pushedChecker == 2) {
            document.querySelector('.p_r').style.borderColor = '#FFF'
        }
    }
    console.log(pushedChecker)
})

document.querySelector('.p_l').addEventListener('click', function() {
    if (pushedChecker > 0) {
        pushPx += 744
        document.querySelector('#f_slide').style.left = `${pushPx}px`
        document.querySelector('#s_slide').style.left = `${pushPx}px`
        document.querySelector('#t_slide').style.left = `${pushPx}px`
        document.querySelectorAll('.bestteam__scroller')[scrollerActive].style.backgroundColor = 'transparent'
        document.querySelectorAll('.bestteam__scroller')[scrollerActive - 1].style.backgroundColor = '#000'
        scrollerActive -= 1
        pushedChecker -= 1
        document.querySelector('.p_r').style.borderColor = '#000'
        if (pushedChecker == 0) {
            document.querySelector('.p_l').style.borderColor = '#FFF'
        }
    }
    console.log(pushedChecker)
})