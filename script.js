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
let pushPx = -774
let scrollerActive = 1
let scrollerList = document.querySelectorAll('.bestteam__scroller')
console.log(scrollerActive, pushedChecker)

function pushFwd() {
    pushPx -= 904
    document.querySelector('#f_slide').style.left = `${pushPx}px`
    document.querySelector('#s_slide').style.left = `${pushPx}px`
    document.querySelector('#t_slide').style.left = `${pushPx}px`
    pushedChecker += 1
    document.querySelector('.p_l').classList.remove("pointer_blocked")
    if (pushedChecker == 2) {
        document.querySelector('.p_r').classList.add("pointer_blocked")
    }
}

function pushBckwd() {
    pushPx += 904
    document.querySelector('#f_slide').style.left = `${pushPx}px`
    document.querySelector('#s_slide').style.left = `${pushPx}px`
    document.querySelector('#t_slide').style.left = `${pushPx}px`
    pushedChecker -= 1
    document.querySelector('.p_r').classList.remove("pointer_blocked")
    if (pushedChecker == 0) {
        document.querySelector('.p_l').classList.add("pointer_blocked")
    }
}

document.querySelector('.p_r').addEventListener('click', function() {
    if (pushedChecker < 2) {
        pushFwd()
        scrollerList[scrollerActive].classList.remove("scroller_active")
        scrollerList[scrollerActive + 1].classList.add("scroller_active")
        scrollerActive += 1
    }
    console.log(scrollerActive, pushedChecker)
})

document.querySelector('.p_l').addEventListener('click', function() {
    if (pushedChecker > 0) {
        pushBckwd()
        scrollerList[scrollerActive].classList.remove("scroller_active")
        scrollerList[scrollerActive - 1].classList.add("scroller_active")
        scrollerActive -= 1
    }
    console.log(scrollerActive, pushedChecker)
})

function scrollerBckwd(count, pushedScroller, prevScroller) {
    scrollerList[prevScroller].classList.remove("scroller_active")
    pushedScroller.classList.add("scroller_active")

    let i = 0
    while (i < count) {
        pushBckwd()
        i++
        scrollerActive -= 1
    }
    console.log(scrollerActive, pushedChecker)
}

function scrollerFwd(count, pushedScroller, prevScroller) {
    scrollerList[prevScroller].classList.remove("scroller_active")
    pushedScroller.classList.add("scroller_active")

    let i = 2
    while (count < i) {
        pushFwd()
        i--
        scrollerActive += 1
    }
    console.log(scrollerActive, pushedChecker)
}

scrollerList[0].addEventListener('click', function() {
    scrollerBckwd(pushedChecker, this, pushedChecker)
})

scrollerList[1].addEventListener('click', function() {
    switch(pushedChecker) {
        case 0:
            scrollerFwd(1, this, 0)
            break
        case 1:
            break
        case 2:
            scrollerBckwd(1, this, 2)
    }
})

scrollerList[2].addEventListener('click', function() {
    scrollerFwd(pushedChecker, this, pushedChecker)
})