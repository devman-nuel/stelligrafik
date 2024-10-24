import Splitting from "splitting";
import { IO } from "./Observe";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Helper function to animate words
const animateWords = (item, stagger, duration, options) => {
    const line = Splitting({ target: item, by: "lines" });
    line.forEach((splitResult) => {
        const wrappedLines = splitResult.words
            .map(wordsArr => `<span class="word_wrap">${wordsArr.outerHTML}</span>`)
            .join("");
        splitResult.el.innerHTML = wrappedLines;
    });

    gsap.set(item.querySelectorAll(".word"), {
        yPercent: 105,
        opacity: 0,
        rotateX: 50,
        transformStyle: "preserve-3d",
    });

    IO(item, options).then(() => {
        const elem = item.querySelectorAll(".word");
        gsap.to(elem, {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            stagger: elem.length > 100 ? stagger * 0.67 : stagger,
            duration: elem.length > 100 ? duration * 0.87 : duration,
            ease: "easeOut",
        });
    });
};

export const split = () => {
    const paragraphs = document.querySelectorAll("[data-animation='paragraph']");
    const headers = document.querySelectorAll("[data-animation='header']");
    const modes = document.querySelectorAll("[data-animation='mode']");
    const fadeInOuts = document.querySelectorAll("[data-animation='fadeInOut']");

    // Animate paragraphs and modes
    paragraphs.forEach(item => animateWords(item, 0.03, 0.75, { threshold: 0.8 }));
    modes.forEach(item => animateWords(item, 0.03, 0.75, { threshold: 0.8 }));

    // Animate headers (with character splitting)
    headers.forEach((item) => {
        Splitting({ target: item, by: "chars" });
        gsap.set(item.querySelectorAll(".char"), {
            opacity: 0,
            yPercent: 100,
            transformStyle: "preserve-3d",
        });

        IO(item, { threshold: 1 }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                opacity: 1,
                yPercent: 0,
                stagger: elem.length > 100 ? 0.01 : 0.02,
                duration: elem.length > 100 ? 0.5 : 0.6,
                ease: "easeOut",
            });
        });
    });

    // Fade In/Out animations
    fadeInOuts.forEach((item) => {
        gsap.set(item, {
            autoAlpha: 0,
            yPercent: 50,
            transformStyle: "preserve-3d",
        });

        gsap.to(item, {
            autoAlpha: 1,
            yPercent: 0,
            duration: item.length > 100 ? 0.7 : 0.6,
            ease: "easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top center",
                end: "+=300",
                scrub: true,
                ease: "circ.easeOut",
                toggleActions: "play play reverse reverse", // Fixed attribute name
            },
        });
    });
};
