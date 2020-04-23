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

// SOCIAL MEDIA
gsap.staggerFrom(
    ".media ul li",
    1.5,
    {
        delay: 2.8,
        opacity: 0,
        x: -30,
        ease: Expo.easeInOut,
    },
    0.08
);

// TEXT
gsap.from(".text h1 .hidetext", 1.5, {
    delay: 1.6,
    y: "100%",
    ease: Expo.easeInOut,
});

gsap.from(".text p .hidetext", 1.5, {
    delay: 2,
    y: "100%",
    ease: Expo.easeInOut,
});

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

// BOTTOMNAV
gsap.from(".bottomnav", 1.5, {
    delay: 3.2,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
});

gsap.from(".bottomnav .next", 1.5, {
    delay: 3.5,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
});
