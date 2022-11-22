// ==========================================
// CONFIG

import './style.scss';
import { gsap, Strong } from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
  el: document.querySelector('.smooth-scroll'),
  smooth: false,
});

scroll.on('scroll', ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy('.smooth-scroll', {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector('.smooth-scroll').style.transform
    ? 'transform'
    : 'fixed',
});

// ==========================================
// RULES

const firstLine = CSSRulePlugin.getRule(
  '.b-top-transparent__anim-to-left:before'
);
const secondLine = CSSRulePlugin.getRule(
  '.b-left-transparent__anim-to-bottom:after'
);
const thirdLine = CSSRulePlugin.getRule(
  '.b-bot-transparent__anim-to-right__sequence-2:before'
);
const fourthLine = CSSRulePlugin.getRule(
  '.b-right-transparent__anim-to-bottom__sequence-2:after'
);
const fifthLine = CSSRulePlugin.getRule(
  '.b-bottom-transparent__anim-to-left__sequence-3:before'
);
const sixthLine = CSSRulePlugin.getRule(
  '.b-left-transparent__anim-to-bottom__sequence-3:before'
);

// sequence4

const sevenLine = CSSRulePlugin.getRule(
  '.b-bottom-transparent__anim-to-right__sequence-4:before'
);

const eightLine = CSSRulePlugin.getRule(
  '.b-right-transparent__anim-to-bottom__sequence-4:after'
);

const nineLine = CSSRulePlugin.getRule(
  '.b-top-transparent__anim-to-left__sequence-4:after'
);

// sequence5

const tenLine = CSSRulePlugin.getRule(
  '.b-left-transparent__anim-to-bottom__sequence-5:after'
);

const elevenLine = CSSRulePlugin.getRule(
  '.b-top-transparent__anim-to-right__sequence-5:after'
);

// sequence6

const twelfeLine = CSSRulePlugin.getRule(
  '.b-right-transparent__anim-to-bottom__sequence-6:before'
);

const thirteenLine = CSSRulePlugin.getRule(
  '.b-bottom-transparent__anim-to-left__sequence-6:before'
);

// sequence7

const fourteenLine = CSSRulePlugin.getRule(
  '.b-left-transparent__anim-to-bottom__sequence-7:before'
);

// sequence8

const fifeteenLine = CSSRulePlugin.getRule(
  '.b-top-transparent__anim-to-right__sequence-8:before'
);

const xisteenLine = CSSRulePlugin.getRule(
  '.b-right-transparent__anim-to-bottom__sequence-8:after'
);

const seventeenLine = CSSRulePlugin.getRule(
  '.b-bottom-transparent__anim-to-left__sequence-8:after'
);

// ==========================================
// SETTERS

gsap.set(firstLine, {
  width: '0%',
});

gsap.set(secondLine, {
  height: '0%',
});

gsap.set(thirdLine, {
  width: '0%',
});

gsap.set(fourthLine, {
  height: '0%',
});

gsap.set(fifthLine, {
  width: '0%',
});

gsap.set(sixthLine, {
  height: '0%',
});

gsap.set(sevenLine, {
  width: '0%',
});

gsap.set(eightLine, {
  height: '0%',
});

gsap.set(nineLine, {
  width: '0%',
});

gsap.set(tenLine, {
  height: '0%',
});

gsap.set(elevenLine, {
  width: '0%',
});

gsap.set(twelfeLine, {
  height: '0%',
});

gsap.set(thirteenLine, {
  width: '0%',
});

gsap.set(fourteenLine, {
  height: '0%',
});

gsap.set(fifeteenLine, {
  width: '0%',
});

gsap.set(xisteenLine, {
  height: '0%',
});

gsap.set(seventeenLine, {
  width: '0%',
});

// ==========================================
// SEQUENCES

const sequence1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-nav',
    scroller: '.smooth-scroll',
    // start: 'top top',
    scrub: false,
    markers: false,
  },
});

const sequence2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence-2-top-line-trigger',
    scroller: '.smooth-scroll',
    start: 'top 60%',
    end: 'top 3%',
    scrub: false,
    markers: false,
  },
});

const sequence3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence-3-top-line-trigger',
    scroller: '.smooth-scroll',
    start: 'top 50%',
    end: 'top 3%',
    scrub: false,
    markers: false,
  },
});

const sequence4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence-4-top-line-trigger',
    scroller: '.smooth-scroll',
    start: 'top 50%',
    end: 'top 3%',
    scrub: false,
    markers: false,
  },
});

const sequence5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence-5-top-line-trigger',
    scroller: '.smooth-scroll',
    start: 'top 50%',
    end: 'top 3%',
    scrub: false,
    markers: false,
  },
});

const sequence6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence-6-top-line-trigger',
    scroller: '.smooth-scroll',
    start: 'top 55%',
    end: 'top 3%',
    scrub: false,
    markers: false,
  },
});

const sequence7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence-7-top-line-trigger',
    scroller: '.smooth-scroll',
    start: 'top 50%',
    end: 'top 3%',
    scrub: false,
    markers: false,
  },
});

const sequence8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence-8-top-line-trigger',
    scroller: '.smooth-scroll',
    start: 'top 50%',
    end: 'top 3%',
    scrub: false,
    markers: false,
  },
});

// ==========================================
// TIMELINE TRIGGER ANIMATIONS

window.addEventListener('DOMContentLoaded', () => {
  sequence1
    .to(firstLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(secondLine, {
      height: '110.5%',
      ease: Strong.easeInOut,
      duration: 2,
    });

  sequence2
    .to(thirdLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(fourthLine, {
      height: '328%',
      ease: Strong.easeInOut,
      duration: 5,
    });

  sequence3
    .to(fifthLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(sixthLine, {
      height: '104.14%',
      ease: Strong.easeInOut,
      duration: 4,
    });

  sequence4
    .to(sevenLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(eightLine, {
      height: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(nineLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    });

  sequence5
    .to(tenLine, {
      height: '2805%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(elevenLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    });

  sequence6
    .to(twelfeLine, {
      height: '1470%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(thirteenLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    });

  sequence7.to(fourteenLine, {
    height: '101%',
    ease: Strong.easeInOut,
    duration: 2,
  });

  sequence8
    .to(fifeteenLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(xisteenLine, {
      height: '1045%',
      ease: Strong.easeInOut,
      duration: 2,
    })
    .to(seventeenLine, {
      width: '100%',
      ease: Strong.easeInOut,
      duration: 2,
    });
});
