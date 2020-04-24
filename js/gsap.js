gsap.to(".overlay img", 2, {
    opacity: 0,
    y: -80,
    ease: Expo.easeInOut,
});

gsap.to(".overlay", 2, {
   
    top: "-100%",
    ease: Expo.easeInOut,
});

gsap.to(".bg", 2, {
    width: "100%",
    ease: Expo.easeInOut,
});

// NAVBAR
gsap.from(".navbar", 1.5, {
    delay: 2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
});
;

// DESC
gsap.staggerFrom(
    ".desc ul li",
    1.5,
    {
        delay: 2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
    },
    0.1
);

gsap.from(".desc p", 1.5, {
    delay: 2.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
});

// SCROLLDOWN
gsap.from(".scrolldown", 1.5, {
    delay: 2.7,
    opacity: 0,
    y: 200,
    ease: Expo.easeInOut,
});
