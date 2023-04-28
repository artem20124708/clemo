// Intro scrollers

function introScroller(focusedScroller, scrollElem) {
    document.querySelector('.scroller_active').classList.remove("scroller_active")
    focusedScroller.classList.add("scroller_active")
    scrollElem.scrollIntoView({behavior: "smooth"})
}

function fixedScroller(focusedScroller) {
    document.querySelector('.scroller_active').classList.remove("scroller_active")
    focusedScroller.classList.add("scroller_active")
}

document.querySelector('.scrollToIntro').addEventListener('click', function() {
    introScroller(this, document.querySelector('.intro'))
})

document.querySelector('.scrollToWwedo').addEventListener('click', function() {
    introScroller(this, document.querySelector('.wwedo__title'))
})
document.querySelector('.scrollToBestwork').addEventListener('click', function() {
    introScroller(this, document.querySelector('.bestwork__title'))
})
document.querySelector('.scrollToBestteam').addEventListener('click', function() {
    introScroller(this, document.querySelector('.bestteam'))
})
document.querySelector('.scrollToClients').addEventListener('click', function() {
    introScroller(this, document.querySelector('#clientsSay'))
})

// Intro scrollers dynamic

let intro = document.querySelector('.intro')
let footer = document.querySelector('footer')

let introHeight = intro.offsetHeight
let footerHeight = footer.offsetHeight
let fullHeight = document.querySelector('body').offsetHeight

let scrollers = document.querySelector('.scrollers')



window.addEventListener('scroll', function() {
    if ((this.window.pageYOffset <= introHeight || this.window.pageYOffset >= (fullHeight - footerHeight) - this.window.innerHeight + 520)) {
        scrollers.classList.remove("fixed")
    } else {
        scrollers.classList.add("fixed")
    }
    switch(true) {
        case  (this.window.pageYOffset <= introHeight):
            fixedScroller(document.querySelector('.scrollToIntro'))
            break
        case (this.window.pageYOffset <= (introHeight + 2030)):
            fixedScroller(document.querySelector('.scrollToWwedo'))
            break
        case (this.window.pageYOffset <= (introHeight + 3360)):
            fixedScroller(document.querySelector('.scrollToBestwork'))
            break
        case (this.window.pageYOffset <= (introHeight + 4000)):
            fixedScroller(document.querySelector('.scrollToBestteam'))
            break
        case (this.window.pageYOffset <= (introHeight + 4610)):
            fixedScroller(document.querySelector('.scrollToClients'))
            break
            
    }
    console.log(this.window.pageYOffset)
})
console.log(introHeight + 2030)

// Bestteam slider

let pushedChecker = 1
let pushPx = -774
let scrollerActive = 1
let scrollerList = document.querySelectorAll('.bestteam__scroller')

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
})

document.querySelector('.p_l').addEventListener('click', function() {
    if (pushedChecker > 0) {
        pushBckwd()
        scrollerList[scrollerActive].classList.remove("scroller_active")
        scrollerList[scrollerActive - 1].classList.add("scroller_active")
        scrollerActive -= 1
    }
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

// Clients slider

let clientCards = document.querySelectorAll('.client__photos__item')
let clients = document.querySelectorAll('.clients__card')
let clientPhotos = document.querySelectorAll('.client__photos__item')
let clientScrollers = document.querySelectorAll('.clients__scroller')

function photosToggle(eNum) {
    document.querySelector('.card_shown').classList.remove("card_shown")
    clients[eNum].classList.add("card_shown")
    document.querySelector('.photos__item_focused').classList.remove("photos__item_focused")
    clientPhotos[eNum].classList.add("photos__item_focused")
    document.querySelector('.clients__scroller_active').classList.remove("clients__scroller_active")
    clientScrollers[eNum].classList.add("clients__scroller_active")
}

function photosBind(eNum) {
    clientCards[eNum].addEventListener('click', function() {
        clientFrame = eNum
        clearTimeout(scrollTimeout)
        scrollDelay()
        photosToggle(eNum)
    })
}

function scrollersBind(eNum) {
    clientScrollers[eNum].addEventListener('click', function() {
        clientFrame = eNum
        clearTimeout(scrollTimeout)
        scrollDelay()
        photosToggle(eNum)
    })

    clientScrollers[eNum].addEventListener('mouseover', function() {
        clientFrame = eNum
        clearTimeout(scrollTimeout)
        scrollDelay()
        photosToggle(eNum)
        overChecker = true;
    })
}

for (i = 0; i < clientCards.length; i++) {
    photosBind(i)
    scrollersBind(i)
}

clientFrame = 0

function clientScroll() {
    if (clientFrame == clientCards.length) {
        clientFrame = 0
    }
    photosToggle(clientFrame)
    clientFrame++
}

let autoScroller = setInterval(clientScroll, 5000)
let scrollTimeout = setTimeout(() => {
}, 0);

function scrollDelay() {
    clearInterval(autoScroller)
    scrollTimeout = setTimeout(() => {
        autoScroller = setInterval(clientScroll, 5000)
    }, 3000)
}

// Footer year

let date = new Date()

let copyrightHeader = document.querySelector('.footer__copyright_header')

copyrightHeader.innerHTML = `&#169 ${date.getFullYear()} clemo.`