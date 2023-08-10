

// animate rotation of wheels during animation

const animateWheels = gsap.timeline({ease:Linear.easeNone, repeat: 0 })
animateWheels.to(".wheels", {
    rotation: "-360",
    transformOrigin: "center",
    duration: 5,
})
animateWheels.to(".wheels", {
    rotation: "+360",
    duration: 5, 
    delay: 6,
}).pause()

// animate truck moving in animation

const animateTruck = gsap.timeline({ease:Linear.easeNone, repeat: 0})
animateTruck.fromTo(".travel", {
    x: "470",
}, {
    x: "0",
    duration: 5,
})
animateTruck.to(".travel", {
    x: "470",
    duration: 5,
    delay: 6,
}).pause()

// animate tipping function of animation

const animateTip = gsap.timeline({ease: Linear.easeNone, repeat: 0})
animateTip.to(".tip-tray", {
    rotation: "-30",
    duration: 4,
    delay: 5,
})
animateTip.to(".tip-tray", {
    rotation: "0",
    duration: 2,
    
}).pause()

// animate the color of the dirt lines from back of truck to pile of dirt on ground

const animateDirtLines = gsap.timeline({ease: Linear.easeNone, repeat: 0})
animateDirtLines.to(".dirt-lines", {
    stroke: "brown",
    delay: 5,
    duration: .1,
})
animateDirtLines.to(".dirt-lines", {
    stroke: "transparent",
    delay: 4,
    duration: .1,
}).pause()

// animate dirtpile in the truck decreasing in size when tipping

const animateTruckPile = gsap.timeline({ease: Linear.easeNone, repeat: 0})
animateTruckPile.fromTo("#truck-dirt", {
    attr: {d: "m 225 175, C 195 60, 75 60, 50 175"}
}, {attr: {d: "m 225 175, C 195 172, 75 172, 50 175"},
    delay: 5,
    duration: 6,
}).pause()

// animate dirtpile on the ground increasing in size
    
const animateGroundPile = gsap.timeline({ease: Linear.easeNone, repeat: 0})
animateGroundPile.fromTo("#ground-pile", {
    attr: {d: "m 50 245, C 40 245, 20 245, 5 245"},
    stroke: "transparent",
    fill: "transparent",
}, {attr: {d: "m 50 245, C 40 100, 20 100, 5 245"},
    stroke: "brown",
    fill: "brown",
    delay: 5,
    duration: 6,
}).pause()

// button event handlers and functions

document.querySelector("#play-button").addEventListener('click', (e) => {
    animateDirtLines.restart()
    animateWheels.restart()
    animateTruck.restart()
    animateTip.restart()
    animateTruckPile.restart()
    animateGroundPile.restart()
})

